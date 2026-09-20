import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itvcc32fg {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 8h14V5H5zm14 2H5v9h14zM5 8v2zm0 0V5zm0 2v9z");
}
</style><path class="itvcc32fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:toolbar-outline-sharp"} {...others} />);
}

export default Component;
