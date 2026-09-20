import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/y/yrrl0ubty.css';
import '../../css/q/qhfymwbra.css';
import '../../css/a/a-g00yrsi.css';
import '../../css/t/tm3c0hb1t.css';
import '../../css/y/ygvta49iu.css';
import '../../css/q/q89tfbc9b.css';
import '../../css/c/ch7k0os4n.css';
import '../../css/r/re-xiubkw.css';
import '../../css/l/ltcp_xbim.css';
import '../../css/g/g9qak4_wu.css';
import '../../css/e/e2_4m2b5v.css';
import '../../css/a/ap9mfpy6w.css';
import '../../css/h/h1dimac-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="yrrl0ubty"/><path class="qhfymwbra"/><path class="a-g00yrsi"/><path class="tm3c0hb1t"/><path class="ygvta49iu"/><path class="q89tfbc9b"/><path class="ch7k0os4n"/><path class="re-xiubkw"/><path class="ltcp_xbim"/><path class="g9qak4_wu"/><path class="e2_4m2b5v"/><path class="ap9mfpy6w"/><path class="h1dimac-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lamp"} {...others} />);
}

export default Component;
