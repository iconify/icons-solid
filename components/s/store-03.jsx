import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iim7lrbsa.css';
import '../../css/w/wcn22lccd.css';
import '../../css/y/yl2qgibmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iim7lrbsa"/><path class="wcn22lccd"/><path class="yl2qgibmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-03"} {...others} />);
}

export default Component;
