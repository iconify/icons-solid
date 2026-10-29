import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf5rlnb_s.css';
import '../../css/r/ro5v85bqf.css';
import '../../css/l/lnysw87pu.css';
import '../../css/c/cxeqomklq.css';
import '../../css/h/h_xsybc4i.css';
import '../../css/u/uu_mg3b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qf5rlnb_s wm-shadow"/><path class="ro5v85bqf wm-k"/><path class="lnysw87pu wm-k"/><path class="cxeqomklq wm-k"/><path class="h_xsybc4i wm-k"/><path class="uu_mg3b0v wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pound-sterling"} {...others} />);
}

export default Component;
