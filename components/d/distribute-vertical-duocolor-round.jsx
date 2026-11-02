import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6hpak9ax {
  d: path("M9 9a3 3 0 0 0 0 6h6a3 3 0 0 0 0-6Z");
}

.q6jxipbvu {
  stroke-opacity: 0.4;
  d: path("M3 4h18M3 20h18");
}
</style><g class="nrj6p8qat"><path class="q6jxipbvu"/><path class="q6hpak9ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:distribute-vertical-duocolor-round"} {...others} />);
}

export default Component;
