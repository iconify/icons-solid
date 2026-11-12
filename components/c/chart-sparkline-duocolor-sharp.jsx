import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqx9uib8u {
  stroke-opacity: 0.4;
  d: path("M16 4a2.828 2.828 0 1 1 4 4a2.828 2.828 0 0 1-4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp38dgmdn {
  d: path("m3 18l4-4l4 3l5-9");
}
</style><g class="nrj6p8qat"><path class="lqx9uib8u"/><path class="pp38dgmdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-sparkline-duocolor-sharp"} {...others} />);
}

export default Component;
