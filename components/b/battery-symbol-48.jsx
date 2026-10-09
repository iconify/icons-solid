import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9dgbcb3v.css';
import '../../css/i/iu22-ybad.css';
import '../../css/t/t3_xox2xc.css';
import '../../css/h/hl6352bxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w9dgbcb3v"/><path class="iu22-ybad"/><path class="t3_xox2xc"/><path class="hl6352bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-symbol-48"} {...others} />);
}

export default Component;
