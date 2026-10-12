import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yq3fyoi2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9z");
}
</style><path class="yq3fyoi2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-waffle-sharp"} {...others} />);
}

export default Component;
