import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.gcrehc-br {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 16V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8M3 18a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2");
}

.i4ot--bis {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 17a1 1 0 0 1-1-1V8a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v8a1 1 0 0 1-1 1Z");
}
</style><g class="ft5dv1b6b"><path class="i4ot--bis"/><path class="gcrehc-br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:laptop-duotone-round"} {...others} />);
}

export default Component;
