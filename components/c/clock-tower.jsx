import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jg31e5ttv.css';
import '../../css/s/sx_8i9btf.css';
import '../../css/s/s26zeabkz.css';
import '../../css/a/ahcsxvbwt.css';
import '../../css/k/k8ip_x-ga.css';
import '../../css/o/ovfsrxb-i.css';
import '../../css/t/teaqeob_q.css';
import '../../css/p/p7ob9sb2u.css';
import '../../css/n/n4e6mebrd.css';
import '../../css/d/d7k55_bin.css';
import '../../css/w/wrca2pbfv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jg31e5ttv"/><rect class="sx_8i9btf"/><path class="s26zeabkz"/><path class="ahcsxvbwt"/><path class="k8ip_x-ga"/><path class="ovfsrxb-i"/><path class="teaqeob_q"/><path class="p7ob9sb2u"/><rect class="n4e6mebrd"/><circle class="d7k55_bin"/><path class="wrca2pbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clock-tower"} {...others} />);
}

export default Component;
