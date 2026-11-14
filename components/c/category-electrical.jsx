import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dui_717ao {
  d: path("M4.5 2h15v20h-15Z");
}

.kxe0zpavv {
  fill: currentColor;
  d: path("M8.5 12h7v3a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 15Z");
}

.ligsbjwqw {
  d: path("M12 4.75h.01M12 19.25h.01");
}

.ujx_k_azy {
  d: path("M8.5 7.5h7v9h-7Zm0 4.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dui_717ao"/><path class="ujx_k_azy"/><path class="kxe0zpavv"/><path class="ligsbjwqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-electrical"} {...others} />);
}

export default Component;
