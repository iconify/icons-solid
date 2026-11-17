import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3pn-qbhe {
  stroke-opacity: 0.4;
  d: path("m12 10.6l.126-.1a3 3 0 0 1 3.748 0l1.625 1.299A4 4 0 0 1 19 14.923V20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q73c0pb0w {
  d: path("M3 20h18m-9 0V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v13");
}
</style><g class="nrj6p8qat"><path class="f3pn-qbhe"/><path class="q73c0pb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-2-duocolor-round"} {...others} />);
}

export default Component;
