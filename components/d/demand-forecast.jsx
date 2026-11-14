import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnh1rebyu {
  d: path("M17 5h4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkzv3lbio {
  d: path("m3 17l5-6l4 3l9-9M3 20.5h18");
}
</style><g class="hntgybcog"><path class="wkzv3lbio"/><path class="fnh1rebyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:demand-forecast"} {...others} />);
}

export default Component;
