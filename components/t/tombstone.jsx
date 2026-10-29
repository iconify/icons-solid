import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0taycunz.css';
import '../../css/l/lk-7760uk.css';
import '../../css/m/mxn_x3b1x.css';
import '../../css/b/b3heoobpe.css';
import '../../css/p/plw-at16s.css';
import '../../css/r/r3le4n16s.css';
import '../../css/u/usg1zebaz.css';
import '../../css/e/end_q9bgb.css';
import '../../css/g/g8pbqr_ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l0taycunz wm-shadow"/><path class="lk-7760uk wm-k"/><path class="mxn_x3b1x wm-k"/><path class="b3heoobpe wm-k"/><path class="plw-at16s wm-k"/><path class="r3le4n16s wm-k"/><path class="usg1zebaz wm-shine"/><path class="end_q9bgb wm-a"/><path class="g8pbqr_ik wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:tombstone"} {...others} />);
}

export default Component;
