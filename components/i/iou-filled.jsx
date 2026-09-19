import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upjig_pzx.css';
import '../../css/m/mii1e_b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="upjig_pzx"/><path clip-rule="evenodd" class="mii1e_b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:iou-filled"} {...others} />);
}

export default Component;
