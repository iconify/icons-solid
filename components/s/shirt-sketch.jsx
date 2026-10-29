import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9_wl1bge.css';
import '../../css/u/un2hhabcu.css';
import '../../css/i/i_ysa44lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b9_wl1bge"/><path class="un2hhabcu"/><path class="i_ysa44lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shirt-sketch"} {...others} />);
}

export default Component;
