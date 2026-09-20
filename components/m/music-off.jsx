import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bin8qkbyn {
  fill: currentColor;
  d: path("M19.8 22.6L1.4 4.2l1.4-1.4l18.4 18.4zM14 11.15l-2-2V3h6v4h-4zM10 21q-1.65 0-2.825-1.175T6 17t1.175-2.825T10 13q.575 0 1.063.138t.937.412V12l2 2v3q0 1.65-1.175 2.825T10 21");
}
</style><path class="bin8qkbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:music-off"} {...others} />);
}

export default Component;
