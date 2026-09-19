import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bj9lmobkz {
  fill: currentColor;
  d: path("M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z");
}
</style><path class="bj9lmobkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-clear-all"} {...others} />);
}

export default Component;
