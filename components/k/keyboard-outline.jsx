import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iybkyztnm.css';
import '../../css/y/ydp9b_bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="iybkyztnm"/><path class="ydp9b_bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:keyboard-outline"} {...others} />);
}

export default Component;
