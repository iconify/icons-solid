import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdrwtopuu.css';
import '../../css/g/g8m7_r0va.css';
import '../../css/z/zhvw-ybch.css';
import '../../css/o/ogktbpbmc.css';
import '../../css/h/hx--hwb2h.css';
import '../../css/v/vyginh7-k.css';
import '../../css/h/ho-b0vb1r.css';
import '../../css/f/f1n1--byr.css';
import '../../css/u/uqmqhq3im.css';
import '../../css/o/oifzdnbzv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mdrwtopuu"/><path class="g8m7_r0va"/><path class="zhvw-ybch"/><path class="ogktbpbmc"/><path class="hx--hwb2h"/><path class="vyginh7-k"/><path class="ho-b0vb1r"/><path class="f1n1--byr"/><path class="uqmqhq3im"/><path class="oifzdnbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:graduation-cap"} {...others} />);
}

export default Component;
