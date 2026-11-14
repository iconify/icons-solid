import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s_s199b5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 2.5v4m-1.75-1.75L12 6.5l1.75-1.75M12 21.5v-4m-1.75 1.75L12 17.5l1.75 1.75M2.5 12h4m-1.75-1.75L6.5 12l-1.75 1.75M21.5 12h-4m1.75-1.75L17.5 12l1.75 1.75");
}
</style><path class="s_s199b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:breathe-in"} {...others} />);
}

export default Component;
