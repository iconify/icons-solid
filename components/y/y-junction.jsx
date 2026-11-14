import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2wydtb2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.5v-7c0-3.5-5-5.5-5.5-12m10.5 19v-7c0-3.5 5-5.5 5.5-12m-11.25 0C9.5 6 12 7.5 12 10c0-2.5 2.5-4 3.25-7.5M12 14.5v4");
}
</style><path class="m2wydtb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:y-junction"} {...others} />);
}

export default Component;
