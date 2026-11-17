import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv1mnhkel {
  d: path("m6 21l4-12V7c0-1.28.36-2.36 1-3a1.414 1.414 0 0 1 2 0c.64.64 1 1.72 1 3v2l4 12M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uttyj_yxy {
  stroke-opacity: 0.4;
  d: path("m9 12l3 6l3-6m-8 6h10");
}
</style><g class="nrj6p8qat"><path class="uttyj_yxy"/><path class="mv1mnhkel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:transmission-tower-duocolor-round"} {...others} />);
}

export default Component;
