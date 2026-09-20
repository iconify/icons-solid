import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-tgzfbsj.css';
import '../../css/l/lprhe1imq.css';
import '../../css/g/g779rpbcx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/z/zwjkv-yck.css';
import '../../css/o/oyicbdmac.css';
import '../../css/i/i250zzb-c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v-tgzfbsj"/><ellipse class="lprhe1imq"/><path class="g779rpbcx"/><g class="z04drlb1l"><path class="zwjkv-yck"/><path class="oyicbdmac"/><path class="i250zzb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flagged-point"} {...others} />);
}

export default Component;
