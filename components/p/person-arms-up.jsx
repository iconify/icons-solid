import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-t4v1n-a {
  d: path("m5.5 3.5l3 5.5h7l3-5.5");
}

.hc1al3bxx {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4v6m-3 6l3-6l3 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hc1al3bxx"/><path class="g-t4v1n-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:person-arms-up"} {...others} />);
}

export default Component;
