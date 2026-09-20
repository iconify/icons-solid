import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dkfiplb5a.css';
import '../../css/l/ldy2vac_x.css';
import '../../css/s/sq6-6k6pw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dkfiplb5a"/><path class="ldy2vac_x"/><path class="sq6-6k6pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:trophy"} {...others} />);
}

export default Component;
