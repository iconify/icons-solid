import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vl95o3b3u.css';
import '../../css/h/hy1izb-rv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vl95o3b3u"/><path class="hy1izb-rv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-ringing-01"} {...others} />);
}

export default Component;
