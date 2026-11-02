import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcflwt4lk {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-2a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l4.293 4.293a.999.999 0 1 0 1.414-1.414L11.414 10Z");
}
</style><path class="bcflwt4lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-arrow-up-left-fill-sharp"} {...others} />);
}

export default Component;
