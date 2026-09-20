import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cipd75yfc.css';
import '../../css/v/vmz_v3bkv.css';
import '../../css/l/l3_nh_z-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cipd75yfc"/><path class="vmz_v3bkv"/><path class="l3_nh_z-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-teams-light"} {...others} />);
}

export default Component;
