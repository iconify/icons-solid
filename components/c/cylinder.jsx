import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tfucpxbpj.css';
import '../../css/k/kl60oacpv.css';
import '../../css/q/q7efo8mje.css';
import '../../css/l/lr90u-zsu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tfucpxbpj"/><path class="kl60oacpv"/><path class="q7efo8mje"/><path class="lr90u-zsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cylinder"} {...others} />);
}

export default Component;
