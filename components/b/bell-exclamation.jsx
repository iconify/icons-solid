import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzfljrblz.css';
import '../../css/s/saso1vbzu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xzfljrblz"/><path class="saso1vbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bell-exclamation"} {...others} />);
}

export default Component;
