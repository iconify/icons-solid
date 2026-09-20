import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r05oa340q {
  fill: currentColor;
  d: path("M5 19h3V5H5zm4 0h10V5H9zm-1 0H5zm-4 1V4h16v16z");
}
</style><path class="r05oa340q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dock-to-right-outline-sharp"} {...others} />);
}

export default Component;
