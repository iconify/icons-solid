import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhlm-3bny {
  d: path("M10.6 21.5H4.5v-19h15v10.1");
}

.qzc1olb4d {
  d: path("M10 6.5L7.5 9l2.5 2.5m4-5L16.5 9l-1.743 1.743M14.5 14.5l7 7m0-7l-7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nhlm-3bny"/><path class="qzc1olb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:compile-error"} {...others} />);
}

export default Component;
