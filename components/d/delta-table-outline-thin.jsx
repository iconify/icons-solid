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

.kchk9kbsh {
  d: path("M4 13.5h16");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.vms-s--ti {
  d: path("m12 4 4.5 4.5h-9Z");
}
</style><g class="hntgybcog"><path class="vms-s--ti"/><path class="kchk9kbsh"/><path class="o8od38cnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:delta-table-outline-thin"} {...others} />);
}

export default Component;
