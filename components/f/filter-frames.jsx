import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_tr_7bxk.css';
import '../../css/q/qks_3bc-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_tr_7bxk"/><path class="qks_3bc-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:filter-frames"} {...others} />);
}

export default Component;
