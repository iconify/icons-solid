import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r2h8wicnq.css';
import '../../css/i/ii_5iybpn.css';
import '../../css/y/yjs-xr50x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="r2h8wicnq"/><path class="ii_5iybpn"/><path class="yjs-xr50x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:short-skirt"} {...others} />);
}

export default Component;
