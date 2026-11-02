import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e39_kac2n {
  stroke-opacity: 0.4;
  d: path("m8 12l-5 5v2a1 1 0 0 0 1 1h4l4-4");
}

.np78-yiwl {
  d: path("m7 11l6-6a1.414 1.414 0 0 1 2 0l4 4a1.414 1.414 0 0 1 0 2l-6 6z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e39_kac2n"/><path class="np78-yiwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:highlighter-duocolor"} {...others} />);
}

export default Component;
