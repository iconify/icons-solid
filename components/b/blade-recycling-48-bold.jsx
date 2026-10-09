import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iczj8dlbv.css';
import '../../css/r/r20x0ob9k.css';
import '../../css/x/xv-bgwbgf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iczj8dlbv"/><path class="r20x0ob9k"/><path class="xv-bgwbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-recycling-48-bold"} {...others} />);
}

export default Component;
