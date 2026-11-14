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

.w2jtzws9c {
  d: path("M12.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9 5.25V5.5a1.75 1.75 0 0 1 3.5 0");
}

.zkzo9glpl {
  d: path("M9.5 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0m-7 9q2.375-1.5 4.75 0T12 17t4.75 0t4.75 0m-19 4q2.375-1.5 4.75 0T12 21t4.75 0t4.75 0");
}
</style><g class="hntgybcog"><path class="zkzo9glpl"/><path class="w2jtzws9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kids-pool"} {...others} />);
}

export default Component;
