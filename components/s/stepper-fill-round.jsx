import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wyunsnugx {
  fill: currentColor;
  d: path("M6 2h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m1 4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm12 9v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0M9 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="wyunsnugx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stepper-fill-round"} {...others} />);
}

export default Component;
