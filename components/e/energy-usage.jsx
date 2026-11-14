import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jg-fi8rtf {
  d: path("M7 6.5h10v5H7ZM19.25 15l-3.5 3.5h4.5l-3.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkxha8b-w {
  d: path("M10.3 20H3.5V3h17v9.3");
}
</style><g class="ulnmmdpxh"><path class="vkxha8b-w"/><path class="jg-fi8rtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:energy-usage"} {...others} />);
}

export default Component;
