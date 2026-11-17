import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c53sembvq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v3a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v2l-2 6c-.253.756-1.302 1-2 1H9a2 2 0 0 1-2-2a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.gxhf66gwd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v3a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v2l-2 6c-.2.597-1.005 1-2 1H9a2 2 0 0 1-2-2m0-9H5a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0z");
}
</style><g class="ft5dv1b6b"><path class="c53sembvq"/><path class="gxhf66gwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-up-duotone"} {...others} />);
}

export default Component;
