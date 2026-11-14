import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8_r5bbaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 8h2.5A1.75 1.75 0 0 1 15 9.75v9a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 18.75v-9A1.75 1.75 0 0 1 10.75 8M6.5 3h11M12 3v5M5.5 20.5h13M15 17c4.5 0 5.5-3 5.5-8");
}
</style><path class="f8_r5bbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ball-pump"} {...others} />);
}

export default Component;
