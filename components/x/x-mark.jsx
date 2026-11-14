import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccqyc3e8o {
  d: path("M19.5 4.5q-6 6.5-15 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jh868ndmt {
  d: path("M4.5 4.5q6 6.5 15 15");
}
</style><g class="hntgybcog"><path class="jh868ndmt"/><path class="ccqyc3e8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:x-mark"} {...others} />);
}

export default Component;
