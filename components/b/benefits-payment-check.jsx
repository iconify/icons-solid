import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gsof1-0bp {
  d: path("M15 8.25h3.5v3H15ZM12.5 15q1.5-2 3 0t3 0");
}

.s5_fcfgbr {
  d: path("M2.5 5.5h19v13h-19Zm3.5 4h5.5m-5.5 5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5_fcfgbr"/><path class="gsof1-0bp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:benefits-payment-check"} {...others} />);
}

export default Component;
