import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eko1wh1jk {
  fill: currentColor;
  d: path("M11 2h6a5 5 0 0 1 5 5v6a3 3 0 0 1-3 3a1 1 0 0 1 0-2a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3h-6a.997.997 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3M2 13a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}
</style><path class="eko1wh1jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-2-fill-round"} {...others} />);
}

export default Component;
