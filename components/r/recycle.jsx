import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dcaq4v6om.css';
import '../../css/k/k_g40ac-s.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dcaq4v6om"/><path class="k_g40ac-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:recycle"} {...others} />);
}

export default Component;
