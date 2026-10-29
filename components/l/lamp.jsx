import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5qi3x88p.css';
import '../../css/o/oylrjwb2e.css';
import '../../css/q/qe7p7j7yq.css';
import '../../css/k/k07zt-b-j.css';
import '../../css/r/rhk8-dp4e.css';
import '../../css/q/q0r_fwt3f.css';
import '../../css/o/odkycqung.css';
import '../../css/x/xl65fvbgw.css';
import '../../css/j/ji4oavsuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5qi3x88p wm-shadow"/><path class="oylrjwb2e wm-k"/><path class="qe7p7j7yq wm-k"/><path class="k07zt-b-j wm-a"/><path class="rhk8-dp4e wm-a"/><path class="q0r_fwt3f wm-a"/><path class="odkycqung wm-a"/><path class="wm-a xl65fvbgw"/><path class="ji4oavsuw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lamp"} {...others} />);
}

export default Component;
