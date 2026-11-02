import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ja-dv5mey {
  stroke-opacity: 0.4;
  d: path("M6 21a6 6 0 1 1 12 0");
}

.nk9dftb5b {
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ja-dv5mey"/><path class="nk9dftb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-duocolor-sharp"} {...others} />);
}

export default Component;
