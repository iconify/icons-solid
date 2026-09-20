import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wzo2vbcvr.css';
import '../../css/f/f51jx7r6r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="wzo2vbcvr"/><path class="f51jx7r6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:axe"} {...others} />);
}

export default Component;
