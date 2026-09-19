import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dn0_yib9b.css';
import '../../css/w/wlx9hpbxe.css';
import '../../css/c/cxrecccxa.css';
import '../../css/o/o4cwaobrg.css';
import '../../css/y/ygxju0b5w.css';
import '../../css/x/x025fcbfa.css';
import '../../css/d/dzy7xsbjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="dn0_yib9b"/><path class="wlx9hpbxe"/><path class="cxrecccxa"/><rect class="o4cwaobrg"/><path class="ygxju0b5w"/><path class="x025fcbfa"/><path class="dzy7xsbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:airplane-window-one"} {...others} />);
}

export default Component;
