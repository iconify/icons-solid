import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yegijm7ac.css';
import '../../css/o/oeiytgbpn.css';
import '../../css/y/y1ohljbkf.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="yegijm7ac"/><path class="oeiytgbpn"/><path class="y1ohljbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:microphone-right"} {...others} />);
}

export default Component;
