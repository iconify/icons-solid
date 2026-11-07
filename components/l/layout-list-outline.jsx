import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujdmdsb_o.css';
import '../../css/t/tqse9w-kx.css';
import '../../css/f/fs4ndldwl.css';
import '../../css/a/a_1t3hbel.css';
import '../../css/d/dopjkpnvn.css';
import '../../css/q/qjl41kbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ujdmdsb_o"/><path class="tqse9w-kx"/><path class="fs4ndldwl"/><path clip-rule="evenodd" class="a_1t3hbel"/><path class="dopjkpnvn"/><path class="qjl41kbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-outline"} {...others} />);
}

export default Component;
