import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fst13_7nd {
  stroke-opacity: 0.4;
  d: path("m8 21l3-3l-3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r5kqcw9ee {
  d: path("M15 18h6V6H3v12h8");
}
</style><g class="nrj6p8qat"><path class="fst13_7nd"/><path class="r5kqcw9ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:loop-duocolor-sharp"} {...others} />);
}

export default Component;
