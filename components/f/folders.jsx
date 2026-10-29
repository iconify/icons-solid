import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpkgojbfi.css';
import '../../css/t/trjzp03fd.css';
import '../../css/g/gb9vtbccy.css';
import '../../css/q/qy47nkeky.css';
import '../../css/p/pi5o2f7py.css';
import '../../css/t/te8e-ibel.css';
import '../../css/s/sdmpxx42j.css';
import '../../css/n/nfguiabpb.css';
import '../../css/u/us9fjnbvc.css';
import '../../css/o/oo2cqsbks.css';
import '../../css/f/fzw3289zw.css';
import '../../css/s/sbt8s93il.css';
import '../../css/o/ojpqafbej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpkgojbfi wm-shadow"/><path class="trjzp03fd wm-k"/><path class="gb9vtbccy wm-k"/><path class="qy47nkeky wm-k"/><path class="pi5o2f7py wm-k"/><path class="te8e-ibel wm-shine"/><path class="sdmpxx42j wm-k"/><path class="nfguiabpb wm-a"/><path class="us9fjnbvc wm-a"/><path class="oo2cqsbks wm-a"/><path class="fzw3289zw wm-a"/><path class="sbt8s93il wm-a"/><path class="ojpqafbej wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:folders"} {...others} />);
}

export default Component;
