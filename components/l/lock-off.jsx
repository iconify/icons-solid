import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fn_8b-b1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1m6 0h5a2 2 0 0 1 2 2v5M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><path class="fn_8b-b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off"} {...others} />);
}

export default Component;
