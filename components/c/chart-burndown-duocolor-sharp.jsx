import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fducfywsi {
  d: path("M7 7h4l3 5h3l4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-x1nwbug {
  stroke-opacity: 0.4;
  d: path("M3 4v16h18");
}
</style><g class="nrj6p8qat"><path class="o-x1nwbug"/><path class="fducfywsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-burndown-duocolor-sharp"} {...others} />);
}

export default Component;
