import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-hswgb5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4h10.5A1.75 1.75 0 0 1 19 5.75v6.5A1.75 1.75 0 0 1 17.25 14H6.75A1.75 1.75 0 0 1 5 12.25v-6.5A1.75 1.75 0 0 1 6.75 4M12 4v10M5 9h14M5 3v18");
}
</style><path class="y-hswgb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flag-checkered"} {...others} />);
}

export default Component;
