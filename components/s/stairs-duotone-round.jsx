import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1tb994ep {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 17h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V9h2a2 2 0 0 0 2-2V5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.j90_-rbwo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V9h2a2 2 0 0 0 2-2V5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
}
</style><g class="ft5dv1b6b"><path class="c1tb994ep"/><path class="j90_-rbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stairs-duotone-round"} {...others} />);
}

export default Component;
