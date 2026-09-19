import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vwega_bod.css';
import '../../css/a/ahrbmubll.css';
import '../../css/k/kmxkex5-c.css';
import '../../css/m/mmd_h2bvz.css';
import '../../css/s/sp8biabka.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vwega_bod"/><path class="ahrbmubll"/><path class="kmxkex5-c"/><path class="mmd_h2bvz"/><path class="sp8biabka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medical-sample"} {...others} />);
}

export default Component;
