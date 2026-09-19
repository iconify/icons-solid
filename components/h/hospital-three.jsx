import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olen39bjy.css';
import '../../css/w/wxeu8eo-m.css';
import '../../css/p/pccwq-bhm.css';
import '../../css/t/t3-90kbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="olen39bjy"/><path class="wxeu8eo-m"/><path class="pccwq-bhm"/><path class="t3-90kbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hospital-three"} {...others} />);
}

export default Component;
