import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wqo-b0b3n.css';
import '../../css/k/k4gw3ubak.css';
import '../../css/a/adyd0rt8l.css';
import '../../css/m/mw9sf0bjj.css';
import '../../css/d/dp7zxik9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wqo-b0b3n"/><path class="k4gw3ubak"/><path class="adyd0rt8l"/><path class="mw9sf0bjj"/><path class="dp7zxik9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:petri-dish"} {...others} />);
}

export default Component;
