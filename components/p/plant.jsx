import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r13825ieb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 13.25h12.5l-1.4 6.6a1.75 1.75 0 0 1-1.7 1.4h-6.3a1.75 1.75 0 0 1-1.7-1.4Zm6.25 0v-4.5m-.75 1.5q-5.625 0-6-5.25q5.625 0 6 5.25m1.5-1.5c.25-3.5 2.25-5.5 6-5.5c-.25 3.5-2.25 5.5-6 5.5");
}
</style><path class="r13825ieb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:plant"} {...others} />);
}

export default Component;
