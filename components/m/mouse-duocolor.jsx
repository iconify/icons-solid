import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4f92acjz {
  stroke-opacity: 0.4;
  d: path("M12 7v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pyjtflbpf {
  d: path("M6 9a6 6 0 1 1 12 0v6a6 6 0 1 1-12 0Z");
}
</style><g class="nrj6p8qat"><path class="a4f92acjz"/><path class="pyjtflbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mouse-duocolor"} {...others} />);
}

export default Component;
