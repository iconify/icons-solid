import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w1lu_ab7x.css';
import '../../css/x/xas6sta9n.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="w1lu_ab7x"/><path class="xas6sta9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:love-playlist-2"} {...others} />);
}

export default Component;
