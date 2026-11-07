import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_vgzxvyz {
  fill: currentColor;
  d: path("M14 18v-2h4V4h-6v2.25h-2V2h10v16zm-8 2h6V8H6zm-2 2V6h10v16zm2-2V8zM18 4v12z");
}
</style><path class="d_vgzxvyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mirror-stack-outline-sharp"} {...others} />);
}

export default Component;
