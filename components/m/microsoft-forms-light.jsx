import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkx980bcs.css';
import '../../css/w/wy4co49ap.css';
import '../../css/m/mpnffo9bz.css';
import '../../css/c/ccv8md5ux.css';
import '../../css/i/ijutckbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hkx980bcs"/><path class="wy4co49ap"/><path class="mpnffo9bz"/><path class="ccv8md5ux"/><path class="ijutckbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-light"} {...others} />);
}

export default Component;
