import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miqrinbch {
  fill: currentColor;
  d: path("M9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="miqrinbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dock-to-right-sharp"} {...others} />);
}

export default Component;
