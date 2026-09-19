import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmg344beo.css';
import '../../css/z/zogbyvumm.css';
import '../../css/y/yn2ti72za.css';
import '../../css/g/gnxr6pgth.css';
import '../../css/z/z95gbczei.css';
import '../../css/p/pviesobzp.css';
import '../../css/g/gbermvbdj.css';
import '../../css/s/sdo2qd-tw.css';
import '../../css/d/dbxk9wbgy.css';
import '../../css/b/bp7x75bjm.css';
import '../../css/l/law_gl-rd.css';
import '../../css/v/vvdj5t23r.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jmg344beo"/><path clip-rule="evenodd" class="zogbyvumm"/><path class="yn2ti72za"/><path clip-rule="evenodd" class="gnxr6pgth"/><path clip-rule="evenodd" class="z95gbczei"/><path class="pviesobzp"/><path clip-rule="evenodd" class="gbermvbdj"/><path clip-rule="evenodd" class="sdo2qd-tw"/><path clip-rule="evenodd" class="dbxk9wbgy"/><path class="bp7x75bjm"/><path clip-rule="evenodd" class="law_gl-rd"/><path clip-rule="evenodd" class="vvdj5t23r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:by"} {...others} />);
}

export default Component;
