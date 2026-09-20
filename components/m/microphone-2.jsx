import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/f/fcke7z2jj.css';
import '../../css/v/vda0lubbh.css';
import '../../css/q/qj2pie1vs.css';
import '../../css/o/oyf0zvbpn.css';
import '../../css/v/v30-lbb_a.css';
import '../../css/x/xcvxd02tc.css';
import '../../css/v/vk7mp9nqs.css';
import '../../css/o/oke43t49u.css';
import '../../css/j/jvgpgacwu.css';
import '../../css/u/ut4cq3qob.css';
import '../../css/j/jxk2w6ygd.css';
import '../../css/c/c2zmsabff.css';
import '../../css/g/gv06b95tw.css';
import '../../css/n/ntfw21oni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="fcke7z2jj"/><path class="vda0lubbh"/><path class="qj2pie1vs"/><path class="oyf0zvbpn"/><path class="v30-lbb_a"/><path class="xcvxd02tc"/><path class="vk7mp9nqs"/><path class="oke43t49u"/><path class="jvgpgacwu"/><path class="ut4cq3qob"/><path class="jxk2w6ygd"/><path class="c2zmsabff"/><path class="gv06b95tw"/><path class="ntfw21oni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:microphone-2"} {...others} />);
}

export default Component;
