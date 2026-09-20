import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pjl1_rn1g.css';
import '../../css/s/ssdrdhlvc.css';
import '../../css/l/l9j2af_qv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="pjl1_rn1g"/><path class="ssdrdhlvc"/><path class="l9j2af_qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bus"} {...others} />);
}

export default Component;
