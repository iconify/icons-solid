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

.n-72-2i3a {
  d: path("M3 19.5V8l6-3.5V8l6-3.5V8l6-3.5v15Z");
}

.rtyreacza {
  d: path("M8 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.xrfa8fz1m {
  d: path("M12 11v2.5h2");
}
</style><g class="hntgybcog"><path class="n-72-2i3a"/><path class="rtyreacza"/><path class="xrfa8fz1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:factory-clock"} {...others} />);
}

export default Component;
