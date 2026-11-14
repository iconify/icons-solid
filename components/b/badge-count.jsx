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

.vxyakx64c {
  d: path("m8 10.5l1.5-1.25v5.5M15 9.5v5M12.5 12h5");
}

.z7wgppb5j {
  d: path("M7.5 7h9a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5a5 5 0 0 1 5-5");
}
</style><g class="hntgybcog"><path class="z7wgppb5j"/><path class="vxyakx64c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:badge-count"} {...others} />);
}

export default Component;
