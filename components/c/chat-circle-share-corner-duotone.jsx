import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c462uy5ip {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 8H10a2 2 0 0 0-2 2v10l-5 1l1-5a8.945 8.945 0 0 1 16-8");
}

.ft5dv1b6b {
  fill: none;
}

.ohnaambnf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 20l-5 1l1-5a8.944 8.944 0 1 1 16-8m-4 6h4v4m0-4l-6 6");
}
</style><g class="ft5dv1b6b"><path class="c462uy5ip"/><path class="ohnaambnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-share-corner-duotone"} {...others} />);
}

export default Component;
