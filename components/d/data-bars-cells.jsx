import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4m9i8bnh {
  fill: currentColor;
  d: path("M7.5 5h9v1.5h-9Zm0 6.25h4v1.5h-4Zm0 6.25H14V19H7.5Z");
}

.orqm14bpo {
  d: path("M4.5 2.5h15v19h-15Zm0 6.25h15m-15 6.5h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="orqm14bpo"/><path class="m4m9i8bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-bars-cells"} {...others} />);
}

export default Component;
