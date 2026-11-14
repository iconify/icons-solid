import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pyqsp1igo {
  d: path("M9 15.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13h8.5l3.5 5h-8.5Z");
}

.y79v70b_o {
  d: path("M6.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="pyqsp1igo"/><path class="y79v70b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bias-tape"} {...others} />);
}

export default Component;
