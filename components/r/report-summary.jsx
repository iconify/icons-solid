import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dddk7acpg {
  d: path("M15 6.5V9a2 2 0 0 0 2 2h2.5m-12-1H12m-4.5 2.5h9m-9 2.5H13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rcttr-bcc {
  d: path("M6.5 6.5H15l4.5 4.5v4.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="rcttr-bcc"/><path class="dddk7acpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:report-summary"} {...others} />);
}

export default Component;
