import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jso8w6qel.css';
import '../../css/g/gun2jeb_g.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jso8w6qel"/><path class="gun2jeb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:diskette"} {...others} />);
}

export default Component;
