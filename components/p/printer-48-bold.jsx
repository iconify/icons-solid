import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhrxslnmz.css';
import '../../css/a/a65l708qm.css';
import '../../css/h/hd4-lcb-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jhrxslnmz"/><path class="a65l708qm"/><path class="hd4-lcb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-48-bold"} {...others} />);
}

export default Component;
