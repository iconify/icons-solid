import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlhzb59lu.css';
import '../../css/p/pog__-9mj.css';
import '../../css/o/oodhiwmdl.css';
import '../../css/e/e972t-bxg.css';
import '../../css/a/aqt77jbzc.css';
import '../../css/c/cm_-blw8p.css';
import '../../css/c/cueaievbn.css';
import '../../css/w/w1m0b9bov.css';
import '../../css/u/urd2tbb_v.css';
import '../../css/e/ea4fft71e.css';
import '../../css/o/oqihlzb5l.css';
import '../../css/o/ov_169oft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlhzb59lu wm-shadow"/><path class="pog__-9mj wm-k"/><path class="oodhiwmdl wm-k"/><path class="e972t-bxg wm-k"/><path class="aqt77jbzc wm-k"/><path class="cm_-blw8p wm-k"/><path class="cueaievbn wm-k"/><path class="w1m0b9bov wm-k"/><path class="urd2tbb_v wm-shine"/><path class="ea4fft71e wm-k"/><path class="oqihlzb5l wm-k"/><path class="ov_169oft wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:git-fork"} {...others} />);
}

export default Component;
