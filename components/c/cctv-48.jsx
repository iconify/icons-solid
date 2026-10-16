import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc-samsdi.css';
import '../../css/m/mmi04ob3v.css';
import '../../css/m/mbxjymbwu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tc-samsdi"/><path class="mmi04ob3v"/><path class="mbxjymbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cctv-48"} {...others} />);
}

export default Component;
