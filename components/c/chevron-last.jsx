import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3jsl82ve.css';
import '../../css/t/t1tatlhlg.css';
import '../../css/u/uv-1-ccdw.css';
import '../../css/k/kqmfwlbsk.css';
import '../../css/y/yy9_p_phn.css';
import '../../css/s/scpsx7b4a.css';
import '../../css/l/lz9oidczj.css';
import '../../css/u/ubm724bbd.css';
import '../../css/h/hg4c8v5te.css';
import '../../css/c/cbljwygww.css';
import '../../css/i/ibddtacmi.css';
import '../../css/f/f7ndw5rag.css';
import '../../css/e/em-3aacqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3jsl82ve wm-shadow"/><path class="t1tatlhlg wm-a"/><path class="uv-1-ccdw wm-a"/><path class="kqmfwlbsk wm-a"/><path class="wm-a yy9_p_phn"/><path class="scpsx7b4a wm-a"/><path class="lz9oidczj wm-a"/><path class="ubm724bbd wm-k"/><path class="hg4c8v5te wm-k"/><path class="cbljwygww wm-k"/><path class="ibddtacmi wm-k"/><path class="f7ndw5rag wm-shine"/><path class="em-3aacqn wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chevron-last"} {...others} />);
}

export default Component;
