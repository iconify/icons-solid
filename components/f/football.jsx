import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwgnpbc_q.css';
import '../../css/h/hx6yxljqs.css';
import '../../css/y/y_uqnrb5n.css';
import '../../css/o/o0yabbcdx.css';
import '../../css/r/rhr6r0bqs.css';
import '../../css/d/dmqr_svyz.css';
import '../../css/p/pne3pub7v.css';
import '../../css/q/q_suz3b9v.css';
import '../../css/s/sw168p1ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwgnpbc_q wm-shadow"/><path class="hx6yxljqs wm-a"/><path class="wm-a y_uqnrb5n"/><path class="o0yabbcdx wm-a"/><path class="rhr6r0bqs wm-a"/><path class="dmqr_svyz wm-a"/><path class="pne3pub7v wm-shine"/><path class="q_suz3b9v wm-k"/><path class="sw168p1ox wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:football"} {...others} />);
}

export default Component;
