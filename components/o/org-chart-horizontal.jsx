import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fa8j_oxrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM8 12h4m4-6.5h-2.5A1.5 1.5 0 0 0 12 7v10a1.5 1.5 0 0 0 1.5 1.5H16");
}
</style><path class="fa8j_oxrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:org-chart-horizontal"} {...others} />);
}

export default Component;
