import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2m-sjbqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.04 11.75H10v-1h4v1h2.96a2.5 2.5 0 1 1 0 3.5H7.04a2.5 2.5 0 1 1 0-3.5Z");
}
</style><path class="v2m-sjbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hoverboard-sharp"} {...others} />);
}

export default Component;
