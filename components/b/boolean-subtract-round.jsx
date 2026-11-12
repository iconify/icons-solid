import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ycaj83jit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 6a2 2 0 0 1 2 2v2m0 4v2a2 2 0 0 1-2 2h-2m-8-2a2 2 0 0 0 2 2h2");
}
</style><path class="ycaj83jit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:boolean-subtract-round"} {...others} />);
}

export default Component;
