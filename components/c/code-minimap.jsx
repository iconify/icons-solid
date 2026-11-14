import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_wtobcpx {
  fill: currentColor;
  d: path("M17.5 5h4v4h-4Z");
}

.nxe97hb_a {
  d: path("M2.5 2.5h12v19h-12Zm3 4.5h6m-6 4h4m-4 4h6m6-12.5h4v19h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nxe97hb_a"/><path class="c_wtobcpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:code-minimap"} {...others} />);
}

export default Component;
