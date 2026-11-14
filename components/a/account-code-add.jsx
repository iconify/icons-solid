import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9r-gwx_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.236 18.457l-1.132 1.132l-6.718-6.718l.707-7.778l7.778-.707l6.718 6.718l-1.131 1.131M8.275 8.275h.01m4.056 1.238l2.475 2.474M18 15v6m-3-3h6");
}
</style><path class="h9r-gwx_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:account-code-add"} {...others} />);
}

export default Component;
