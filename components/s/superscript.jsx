import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtrfv8r7l.css';
import '../../css/m/mtq-lqa7s.css';
import '../../css/t/t-dqu1q3p.css';
import '../../css/i/i0hhibcuo.css';
import '../../css/o/o7ses35yk.css';
import '../../css/a/avereqbtc.css';
import '../../css/y/ywyd24qrh.css';
import '../../css/v/vt8qv6vjb.css';
import '../../css/u/uj49i5bej.css';
import '../../css/r/r1fof5dar.css';
import '../../css/o/o74ovubyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtrfv8r7l wm-shadow"/><path class="mtq-lqa7s wm-k"/><path class="t-dqu1q3p wm-k"/><path class="i0hhibcuo wm-k"/><path class="o7ses35yk wm-k"/><path class="avereqbtc wm-shine"/><path class="wm-a ywyd24qrh"/><path class="vt8qv6vjb wm-a"/><path class="uj49i5bej wm-a"/><path class="r1fof5dar wm-a"/><path class="o74ovubyx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:superscript"} {...others} />);
}

export default Component;
