import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq8drccgj {
  d: path("M7 8h6m-3 4h7m-3 4h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nt-syvbnj {
  stroke-opacity: 0.4;
  d: path("M3 4v14a2 2 0 0 0 2 2h16");
}
</style><g class="nrj6p8qat"><path class="nt-syvbnj"/><path class="eq8drccgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-gantt-duocolor"} {...others} />);
}

export default Component;
