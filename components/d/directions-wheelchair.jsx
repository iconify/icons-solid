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

.to4qtwbeh {
  d: path("M7.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4.5V14H15l2.5 5.5h2M9.5 11h4");
}

.zcp4kvp5k {
  d: path("M14.763 12.75a5.5 5.5 0 0 1-7.513 7.513");
}
</style><g class="hntgybcog"><path class="to4qtwbeh"/><path class="zcp4kvp5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:directions-wheelchair"} {...others} />);
}

export default Component;
