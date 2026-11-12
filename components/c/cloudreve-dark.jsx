import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvt5e6byc.css';
import '../../css/x/xggso64xb.css';
import '../../css/v/v-6n0zb4e.css';
import '../../css/r/rqa_vtz4c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wvt5e6byc"/><circle class="xggso64xb"/><path class="v-6n0zb4e"/><path class="rqa_vtz4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudreve-dark"} {...others} />);
}

export default Component;
