import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4f7esbvm {
  d: path("M21.5 12a9.5 9.5 0 1 1-2.75-6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p97egtsyk {
  d: path("M18.75 2.75v2.5h-2.5m-4.25 5a3 3 0 1 0 0 3.5a3 3 0 1 0 0-3.5");
}
</style><g class="hntgybcog"><path class="d4f7esbvm"/><path class="p97egtsyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cell-cycle"} {...others} />);
}

export default Component;
