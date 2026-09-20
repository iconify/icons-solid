import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3h7vebmw {
  fill: currentColor;
  d: path("M5 14h14V5H5zm-2 7V3h18v18z");
}
</style><path class="e3h7vebmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-to-bottom-sharp"} {...others} />);
}

export default Component;
