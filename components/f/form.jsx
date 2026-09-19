import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4jepobvp.css';
import '../../css/d/dqfccdcte.css';
import '../../css/r/rxva93tst.css';
import '../../css/w/w0g6tmczy.css';
import '../../css/t/t58io2b8o.css';
import '../../css/f/fvmgyqb3j.css';
import '../../css/w/w7ebk5bmn.css';
import '../../css/m/mzfwginej.css';
import '../../css/o/oo64-6btk.css';
import '../../css/f/fi7qb_fyj.css';
import '../../css/m/mgr2nfb-m.css';
import '../../css/u/uz9iqmwyw.css';
import '../../css/t/twpx590ic.css';
import '../../css/a/a887s0k3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="p4jepobvp"/><path clip-rule="evenodd" class="dqfccdcte"/><path class="rxva93tst"/><path clip-rule="evenodd" class="w0g6tmczy"/><path class="t58io2b8o"/><path clip-rule="evenodd" class="fvmgyqb3j"/><path class="w7ebk5bmn"/><path clip-rule="evenodd" class="mzfwginej"/><path class="oo64-6btk"/><path clip-rule="evenodd" class="fi7qb_fyj"/><path class="mgr2nfb-m"/><path clip-rule="evenodd" class="uz9iqmwyw"/><path class="twpx590ic"/><path class="a887s0k3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:form"} {...others} />);
}

export default Component;
