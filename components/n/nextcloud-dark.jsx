import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_omvb_gj.css';
import '../../css/x/xgsv66jjz.css';
import '../../css/k/kg-qgmbsg.css';

const viewBox = {"width":512,"height":512};
const content = `<circle clip-rule="evenodd" transform="rotate(-13.286 255.94 255.868)" class="k_omvb_gj"/><path clip-rule="evenodd" class="xgsv66jjz"/><path clip-rule="evenodd" class="kg-qgmbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-dark"} {...others} />);
}

export default Component;
