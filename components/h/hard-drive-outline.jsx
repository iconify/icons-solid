import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn_e35btc.css';
import '../../css/v/vtfwic-qn.css';
import '../../css/u/uqlamj4tr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mn_e35btc"/><path class="vtfwic-qn"/><circle class="uqlamj4tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:hard-drive-outline"} {...others} />);
}

export default Component;
