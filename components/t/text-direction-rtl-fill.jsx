import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1s5r38_x {
  fill: currentColor;
  d: path("M11 2h6a1 1 0 0 1 0 2v7a1 1 0 0 1-2 0V4h-2v7a1 1 0 0 1-2 0v-1a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4ZM6.707 15.707L5.414 17H21a1 1 0 0 1 0 2H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414");
}
</style><path class="e1s5r38_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-direction-rtl-fill"} {...others} />);
}

export default Component;
