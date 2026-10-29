import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_f957rok.css';
import '../../css/f/f9-wtywwv.css';
import '../../css/g/gyzfat0uc.css';
import '../../css/l/l_19o-k5r.css';
import '../../css/r/r8iqo6b4l.css';
import '../../css/c/cg3eh207c.css';
import '../../css/t/trdoiw4zg.css';
import '../../css/u/u6qmbhgln.css';
import '../../css/w/w285kd_ts.css';
import '../../css/x/x3n-vt_ns.css';
import '../../css/s/sxei_t-7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_f957rok wm-shadow"/><path class="f9-wtywwv wm-a"/><path class="gyzfat0uc wm-a"/><path class="l_19o-k5r wm-a"/><path class="r8iqo6b4l wm-a"/><path class="cg3eh207c wm-k"/><path class="trdoiw4zg wm-k"/><path class="u6qmbhgln wm-k"/><path class="w285kd_ts wm-k"/><path class="wm-shine x3n-vt_ns"/><path class="sxei_t-7z wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:plane-landing"} {...others} />);
}

export default Component;
