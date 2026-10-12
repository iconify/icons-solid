import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qx0qkv-zt.css';
import '../../css/x/xvu_v82pz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.29)scale(-1 1)" class="qx0qkv-zt"/><path class="xvu_v82pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:corner-radius"} {...others} />);
}

export default Component;
