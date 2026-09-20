import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/iig1o2bkc.css';
import '../../css/h/hmtd5ibay.css';
import '../../css/o/ogtgwab_d.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="iig1o2bkc"/><path class="hmtd5ibay"/><path class="ogtgwab_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mountain"} {...others} />);
}

export default Component;
