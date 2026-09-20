import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f34yd9l1y.css';
import '../../css/h/htejtib-e.css';
import '../../css/g/g6hd76hzz.css';
import '../../css/f/fueed4b2h.css';
import '../../css/x/x8zt3dbch.css';
import '../../css/v/v0a5rnbkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f34yd9l1y"/><path class="htejtib-e"/><path class="g6hd76hzz"/><path class="fueed4b2h"/><path class="x8zt3dbch"/><path class="v0a5rnbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:location-pin-disabled"} {...others} />);
}

export default Component;
