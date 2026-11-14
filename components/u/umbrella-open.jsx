import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dv12iga-f {
  d: path("M12 11v7.5a2 2 0 0 1-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8be009se {
  d: path("M2.5 12a9.5 9.5 0 0 1 19 0q-3.25-2-6.25 0q-3.25-2-6.5 0q-3-2-6.25 0");
}
</style><g class="hntgybcog"><path class="m8be009se"/><path class="dv12iga-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:umbrella-open"} {...others} />);
}

export default Component;
