import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxzo85ixz.css';
import '../../css/q/qyem97bcd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mxzo85ixz"/><path class="qyem97bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:golf-48-bold"} {...others} />);
}

export default Component;
