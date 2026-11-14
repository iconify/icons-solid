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

.p_slymb5n {
  d: path("M10.75 6h2.5a5.25 5.25 0 0 1 5.25 5.25v1.5A5.25 5.25 0 0 1 13.25 18h-2.5a5.25 5.25 0 0 1-5.25-5.25v-1.5A5.25 5.25 0 0 1 10.75 6M8.5 6V2.5h7V6m-7 12v3.5h7V18M12 8.75V15");
}

.rxuyrcbli {
  d: path("M9.5 12.5L12 15l2.5-2.5");
}
</style><g class="hntgybcog"><path class="p_slymb5n"/><path class="rxuyrcbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dive-computer"} {...others} />);
}

export default Component;
