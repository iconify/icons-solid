import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/honn_5b0a.css';
import '../../css/s/sp8q1obbc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="honn_5b0a"/><path class="sp8q1obbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mute"} {...others} />);
}

export default Component;
