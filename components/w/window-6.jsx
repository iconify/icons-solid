import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v5d6znb_q.css';
import '../../css/v/vpw-frb_b.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="v5d6znb_q"/><path class="vpw-frb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:window-6"} {...others} />);
}

export default Component;
