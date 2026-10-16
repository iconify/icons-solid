import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqcbkb80u.css';
import '../../css/d/dhb5ncchk.css';
import '../../css/x/xivol_qmh.css';
import '../../css/p/pk_cvd_mq.css';
import '../../css/n/nznag3jbj.css';
import '../../css/z/zehpmlktm.css';
import '../../css/z/zxv0tjflk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sqcbkb80u"/><rect class="dhb5ncchk"/><path class="xivol_qmh"/><path class="pk_cvd_mq"/><path clip-rule="evenodd" class="nznag3jbj"/><path class="zehpmlktm"/><path class="zxv0tjflk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-to-video"} {...others} />);
}

export default Component;
