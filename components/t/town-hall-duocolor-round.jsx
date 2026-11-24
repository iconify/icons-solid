import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmnrhdbrf {
  d: path("M17 8v7a4 4 0 0 1 4 4v2H3v-2a4 4 0 0 1 4-4V8m3 13v-2a2 2 0 1 1 4 0v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xvhm6qbos {
  stroke-opacity: 0.4;
  d: path("M7 8a5 5 0 0 1 10 0m0 0A5 5 0 0 1 7 8m5-2v2h2");
}
</style><g class="nrj6p8qat"><path class="xvhm6qbos"/><path class="fmnrhdbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:town-hall-duocolor-round"} {...others} />);
}

export default Component;
