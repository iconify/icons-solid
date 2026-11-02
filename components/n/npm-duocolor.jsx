import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kj6daq0ea {
  d: path("M14 21V10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-zxycb7m {
  stroke-opacity: 0.4;
  d: path("M3 3h18v18H3Z");
}
</style><g class="nrj6p8qat"><path class="o-zxycb7m"/><path class="kj6daq0ea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:npm-duocolor"} {...others} />);
}

export default Component;
