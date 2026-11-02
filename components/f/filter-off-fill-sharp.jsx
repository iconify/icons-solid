import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rgviecc5u {
  fill: currentColor;
  d: path("m4.707 1.293l14 14a.999.999 0 1 1-1.414 1.414L15 14.414V18a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 20v-7.586L3.293 6.707A1 1 0 0 1 3 6V4a1 1 0 0 1 .649-.936l-.356-.357a.999.999 0 1 1 1.414-1.414M9.243 3H20a1 1 0 0 1 1 1v2c0 .265-.105.52-.293.707l-3.879 3.879Z");
}
</style><path class="rgviecc5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:filter-off-fill-sharp"} {...others} />);
}

export default Component;
