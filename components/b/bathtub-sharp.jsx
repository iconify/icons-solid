import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5ub2gbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25h18.5v3a5 5 0 0 1-5 5h-8.5a5 5 0 0 1-5-5Zm3.75 8l-.75 2m11.75-2l.75 2m-12.75-10v-6a2.5 2.5 0 0 1 4.75-1.1");
}
</style><path class="u5ub2gbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bathtub-sharp"} {...others} />);
}

export default Component;
