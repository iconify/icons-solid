import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e-y-jcbtg.css';
import '../../css/j/jf8nxac2c.css';
import '../../css/k/k7ospfcov.css';
import '../../css/h/h8gy_nb5o.css';
import '../../css/e/e_v5y3bmx.css';
import '../../css/f/fxwmpnb8f.css';
import '../../css/p/phvmvu6od.css';
import '../../css/r/rs44f5bwj.css';
import '../../css/x/xlst-nmta.css';
import '../../css/o/ohedanbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="e-y-jcbtg"/><path class="jf8nxac2c"/><circle class="k7ospfcov"/><circle class="h8gy_nb5o"/><circle class="e_v5y3bmx"/><circle class="fxwmpnb8f"/><path class="phvmvu6od"/><path class="rs44f5bwj"/><path class="xlst-nmta"/><path class="ohedanbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-yi"} {...others} />);
}

export default Component;
