import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nnzc6bu3w {
  stroke-opacity: 0.4;
  d: path("M14 12h6m-3-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sueirabcw {
  d: path("M4 4h6v16H4Z");
}
</style><g class="nrj6p8qat"><path class="nnzc6bu3w"/><path class="sueirabcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:column-plus-duocolor-sharp"} {...others} />);
}

export default Component;
