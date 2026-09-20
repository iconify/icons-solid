import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cdtzbvf-p.css';
import '../../css/c/ciz3rxbla.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cdtzbvf-p"/><path class="ciz3rxbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:date"} {...others} />);
}

export default Component;
