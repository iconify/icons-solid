import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qt5-5ob2a {
  d: path("M5.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu0hr2bnc {
  d: path("M2.5 2.5H4V16h17");
}

.we50-eevb {
  d: path("M6.5 6.5h4V16h-4Zm9.227-1.186l3.912.831l-2.183 10.271l-3.912-.832Z");
}
</style><g class="ulnmmdpxh"><path class="vu0hr2bnc"/><path class="we50-eevb"/><path class="qt5-5ob2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:book-cart-library"} {...others} />);
}

export default Component;
