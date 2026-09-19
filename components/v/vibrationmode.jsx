import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqd6qpbht.css';
import '../../css/b/bbpo9lb1d.css';
import '../../css/p/pe1khgbxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pqd6qpbht"/><path class="bbpo9lb1d"/><path class="pe1khgbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:vibrationmode"} {...others} />);
}

export default Component;
