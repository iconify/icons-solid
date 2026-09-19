import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2w-k1b0l.css';
import '../../css/e/ebmufuxbk.css';
import '../../css/f/ffjuatbvx.css';
import '../../css/o/odgak_b2x.css';
import '../../css/n/n7lt-3b_q.css';
import '../../css/d/d8birkbag.css';
import '../../css/z/z45cs_fbi.css';
import '../../css/n/nrwym7byl.css';
import '../../css/y/ymch4fgtk.css';
import '../../css/r/rqbkpobab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a2w-k1b0l"/><path class="ebmufuxbk"/><path class="ffjuatbvx"/><path class="odgak_b2x"/><path class="n7lt-3b_q"/><path class="d8birkbag"/><path class="z45cs_fbi"/><path class="nrwym7byl"/><path class="ymch4fgtk"/><path class="rqbkpobab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lens-alignment"} {...others} />);
}

export default Component;
