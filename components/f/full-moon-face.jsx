import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciqskgrxn.css';
import '../../css/g/ga1sjvbyy.css';
import '../../css/x/xfhi4q65f.css';
import '../../css/j/jdlpjnb4o.css';
import '../../css/b/btnne-b7c.css';
import '../../css/m/mkl384bee.css';
import '../../css/v/vxlbttzuq.css';
import '../../css/e/egw504wmg.css';
import '../../css/t/tf689bt3o.css';
import '../../css/c/c3i721byd.css';
import '../../css/l/lpb4dcblo.css';
import '../../css/y/y877-v21y.css';
import '../../css/h/h9zjk6j1z.css';
import '../../css/t/tfdbz2pie.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="ciqskgrxn"/><path class="ga1sjvbyy"/><circle class="xfhi4q65f"/><circle class="jdlpjnb4o"/><g class="btnne-b7c"><path class="mkl384bee"/><path class="vxlbttzuq"/><path class="egw504wmg"/><circle class="tf689bt3o"/><circle class="c3i721byd"/><circle class="lpb4dcblo"/><circle class="y877-v21y"/><circle class="h9zjk6j1z"/><circle class="tfdbz2pie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:full-moon-face"} {...others} />);
}

export default Component;
