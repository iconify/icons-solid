import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aexnd4hgf {
  fill: currentColor;
  d: path("M6 22V10h12v12zM6 8V6h2v2zm10 0V6h2v2zM6 4V2h2v2zm5 0V2h2v2zm5 0V2h2v2z");
}
</style><path class="aexnd4hgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:move-selection-down"} {...others} />);
}

export default Component;
