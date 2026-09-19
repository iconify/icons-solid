import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rf0fdac8k {
  fill: currentColor;
  d: path("M6 5h4v14H6zm8 0h4v14h-4z");
}
</style><path class="rf0fdac8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-pause"} {...others} />);
}

export default Component;
