import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkouom4ng.css';
import '../../css/x/x5sp9jbpj.css';
import '../../css/t/trd7k5bwv.css';
import '../../css/n/nbqwd4iwk.css';
import '../../css/c/c0p9dvbyc.css';
import '../../css/z/zww--4dkl.css';
import '../../css/g/gpovo3b8d.css';
import '../../css/h/hapxqccno.css';
import '../../css/l/lpoz2u9kg.css';
import '../../css/r/rhb1yobdc.css';
import '../../css/v/v5sb7fbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xkouom4ng"/><path class="wm-k x5sp9jbpj"/><path class="trd7k5bwv wm-k"/><path class="nbqwd4iwk wm-k"/><path class="c0p9dvbyc wm-k"/><path class="wm-k zww--4dkl"/><path class="gpovo3b8d wm-shine"/><path class="hapxqccno wm-k"/><path class="lpoz2u9kg wm-a"/><path class="rhb1yobdc wm-a"/><path class="v5sb7fbfi wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:hard-drive"} {...others} />);
}

export default Component;
