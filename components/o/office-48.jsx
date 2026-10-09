import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy1oo49dt.css';
import '../../css/e/e15sxdbol.css';
import '../../css/r/r5r8zsb7i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oy1oo49dt"/><path class="e15sxdbol"/><path class="r5r8zsb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:office-48"} {...others} />);
}

export default Component;
