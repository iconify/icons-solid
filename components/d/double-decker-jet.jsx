import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkyjf-bbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 8.5 0 1 0 19 0a9.5 8.5 0 1 0-19 0Zm0 0h19m-15-3h.01M17.5 9h.01M6.5 15h.01m10.99 0h.01");
}
</style><path class="wkyjf-bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:double-decker-jet"} {...others} />);
}

export default Component;
