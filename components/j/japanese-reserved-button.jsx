import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_n5szd6u.css';
import '../../css/h/hjntk2vdz.css';
import '../../css/i/imts8ivyw.css';
import '../../css/p/p2n3pj8fk.css';
import '../../css/q/qmje0acpg.css';
import '../../css/l/l695g062b.css';
import '../../css/b/bgo4ul00i.css';
import '../../css/y/ye99_wbto.css';
import '../../css/i/i9b0ahadn.css';
import '../../css/w/wl1m1mbno.css';
import '../../css/s/su4x4dc1o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="u_n5szd6u"/><g clip-rule="evenodd" class="hjntk2vdz"><path class="imts8ivyw"/><path class="p2n3pj8fk"/><path class="qmje0acpg"/><path class="l695g062b"/><path class="bgo4ul00i"/><path class="ye99_wbto"/><path class="i9b0ahadn"/><path class="wl1m1mbno"/><path transform="matrix(.271 0 0 .27 -370.677 -4.87)" class="su4x4dc1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-reserved-button"} {...others} />);
}

export default Component;
