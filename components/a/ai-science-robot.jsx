import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w3zmsbx2l.css';
import '../../css/q/qpsgozqrk.css';
import '../../css/r/rv69_ebwg.css';
import '../../css/g/gomdqefdw.css';
import '../../css/t/t1bbfnbml.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w3zmsbx2l"/><path class="qpsgozqrk"/><path class="rv69_ebwg"/><path class="gomdqefdw"/><path class="t1bbfnbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-science-robot"} {...others} />);
}

export default Component;
