import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/w/ws8lrmlgs.css';
import '../../css/h/hs1eo5b-l.css';
import '../../css/b/bqv7lzboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="ws8lrmlgs"/><path class="hs1eo5b-l"/><path class="bqv7lzboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rings"} {...others} />);
}

export default Component;
