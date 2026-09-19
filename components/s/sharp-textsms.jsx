import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1i0adb3m {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zM9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z");
}
</style><path class="h1i0adb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-textsms"} {...others} />);
}

export default Component;
