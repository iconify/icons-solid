import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2d71j6cg {
  fill: currentColor;
  d: path("M19.6 21L3 4.425L4.425 3L21 19.575zM9.575 21L3 14.425L4.425 13L11 19.575z");
}
</style><path class="r2d71j6cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:resize-window-outline"} {...others} />);
}

export default Component;
