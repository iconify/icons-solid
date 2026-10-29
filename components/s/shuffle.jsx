import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4x06xbnb.css';
import '../../css/w/wce_t-bfa.css';
import '../../css/c/cadnvbcnw.css';
import '../../css/w/whd-krgne.css';
import '../../css/t/tyjszv8cu.css';
import '../../css/v/vod4-49fq.css';
import '../../css/q/qbdapyyrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4x06xbnb wm-a"/><path class="wce_t-bfa wm-a"/><path class="cadnvbcnw wm-a"/><path class="whd-krgne wm-a"/><path class="tyjszv8cu wm-a"/><path class="vod4-49fq wm-a"/><path class="qbdapyyrq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shuffle"} {...others} />);
}

export default Component;
