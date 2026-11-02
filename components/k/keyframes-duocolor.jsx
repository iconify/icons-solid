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

.rjfd3m8ci {
  stroke-opacity: 0.4;
  d: path("m5 9l-2 2a1.414 1.414 0 0 0 0 2l2 2m14-6l2 2a1.414 1.414 0 0 1 0 2l-2 2");
}

.vu3cokhaw {
  d: path("m14 10l1 1a1.414 1.414 0 0 1 0 2l-2 2a1.414 1.414 0 0 1-2 0l-2-2a1.414 1.414 0 0 1 0-2l2-2a1.414 1.414 0 0 1 2 0z");
}
</style><g class="nrj6p8qat"><path class="rjfd3m8ci"/><path class="vu3cokhaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:keyframes-duocolor"} {...others} />);
}

export default Component;
