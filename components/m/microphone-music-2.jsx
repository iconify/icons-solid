import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ufb6kdbct.css';
import '../../css/o/ois1sobwm.css';
import '../../css/w/w3m23pulh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ufb6kdbct"/><path class="ois1sobwm"/><path class="w3m23pulh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:microphone-music-2"} {...others} />);
}

export default Component;
