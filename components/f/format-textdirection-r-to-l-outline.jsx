import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jm4n-mbyo {
  fill: currentColor;
  d: path("M9 15v-5q-1.65 0-2.825-1.175T5 6t1.175-2.825T9 2h8v2h-2v11h-2V4h-2v11zm-2.2 4l1.6 1.6L7 22l-4-4l4-4l1.4 1.4L6.8 17H21v2zM9 8V4q-.825 0-1.412.588T7 6t.588 1.413T9 8m0-2");
}
</style><path class="jm4n-mbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-textdirection-r-to-l-outline"} {...others} />);
}

export default Component;
