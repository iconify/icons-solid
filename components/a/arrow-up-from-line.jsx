import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3pe-ciow.css';
import '../../css/l/lp2eyhbtz.css';
import '../../css/r/reli5ilue.css';
import '../../css/x/x05ie_rli.css';
import '../../css/o/oi75pphgf.css';
import '../../css/l/lpteswc5s.css';
import '../../css/z/z_0_zac8v.css';
import '../../css/r/rt230hb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3pe-ciow wm-shadow"/><path class="lp2eyhbtz wm-k"/><path class="reli5ilue wm-k"/><path class="wm-a x05ie_rli"/><path class="oi75pphgf wm-a"/><path class="lpteswc5s wm-a"/><path class="wm-a z_0_zac8v"/><path class="rt230hb4d wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-up-from-line"} {...others} />);
}

export default Component;
