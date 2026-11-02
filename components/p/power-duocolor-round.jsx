import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i9jp_22em {
  stroke-opacity: 0.4;
  d: path("M12 3v8");
}

.n2qjb3bpu {
  d: path("M17 7a7.81 7.81 0 0 1 1 11c-3.123 3.747-8.877 3.747-12 0A7.81 7.81 0 0 1 7 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i9jp_22em"/><path class="n2qjb3bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:power-duocolor-round"} {...others} />);
}

export default Component;
