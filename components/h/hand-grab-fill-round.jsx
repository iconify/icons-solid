import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqd5lhb3l {
  fill: currentColor;
  d: path("M3 12.5a1.5 1.5 0 0 1 3 0V15a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3.001-1.732C10.619 7.626 11 8.285 11 9v3a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3.001-1.732C15.619 7.626 16 8.285 16 9v3a.5.5 0 0 0 1 0V9a1.999 1.999 0 0 1 3-1.732c.619.357 1 1.017 1 1.732v6a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7Z");
}
</style><path class="aqd5lhb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hand-grab-fill-round"} {...others} />);
}

export default Component;
