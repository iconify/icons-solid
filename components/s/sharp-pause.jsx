import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxk4d9y5y {
  fill: currentColor;
  d: path("M6 19h4V5H6zm8-14v14h4V5z");
}
</style><path class="dxk4d9y5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pause"} {...others} />);
}

export default Component;
