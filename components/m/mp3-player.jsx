import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/iz9p36q2i.css';
import '../../css/o/oaizj4bjv.css';
import '../../css/x/xjllsqnue.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="iz9p36q2i"/><path class="oaizj4bjv"/><path class="xjllsqnue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mp3-player"} {...others} />);
}

export default Component;
