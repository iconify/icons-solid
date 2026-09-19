import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pmjpxlapk {
  fill: currentColor;
  d: path("M12.01 4V1l-4 4l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20.01 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.25 7.74A7.93 7.93 0 0 0 4.01 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z");
}
</style><path class="pmjpxlapk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-sync"} {...others} />);
}

export default Component;
