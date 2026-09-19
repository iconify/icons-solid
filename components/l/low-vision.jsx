import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv_l09bks.css';
import '../../css/k/kv-q3cc2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv_l09bks"/><path class="kv-q3cc2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:low-vision"} {...others} />);
}

export default Component;
