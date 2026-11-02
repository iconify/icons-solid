import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpzkqbbnc {
  d: path("M6 3v13a2 2 0 0 0 2 2h13M3 6h3m12 12v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.owyd6db1y {
  stroke-opacity: 0.4;
  d: path("M10 6h6a2 2 0 0 1 2 2v6");
}
</style><g class="nrj6p8qat"><path class="owyd6db1y"/><path class="cpzkqbbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-duocolor"} {...others} />);
}

export default Component;
