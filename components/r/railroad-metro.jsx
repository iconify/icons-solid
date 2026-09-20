import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjas_-iyj.css';
import '../../css/o/opn6s3bnk.css';
import '../../css/c/c-f06i3no.css';
import '../../css/k/kk7j470sk.css';
import '../../css/u/up9ic1b_r.css';
import '../../css/u/ueusv-bjs.css';
import '../../css/c/cw09wac2h.css';
import '../../css/k/k2z0_cizx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tjas_-iyj"/><path class="opn6s3bnk"/><path class="c-f06i3no"/><path class="kk7j470sk"/><path class="up9ic1b_r"/><path class="ueusv-bjs"/><path class="cw09wac2h"/><path class="k2z0_cizx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:railroad-metro"} {...others} />);
}

export default Component;
