import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg-sbva4i {
  d: path("M9 19.75v-4.5h6v4.5");
}

.fr6cu2yja {
  d: path("M2.5 4.25h19M4 4.25v15.5h16V4.25M7.5 7.75v4m3-4v4m3-4v4m3-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fr6cu2yja"/><path class="eg-sbva4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:telecom-exchange"} {...others} />);
}

export default Component;
