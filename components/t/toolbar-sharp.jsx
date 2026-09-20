import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9avs0ujt {
  fill: currentColor;
  d: path("M4 8V4h16v4zm0 12V9h16v11z");
}
</style><path class="n9avs0ujt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:toolbar-sharp"} {...others} />);
}

export default Component;
