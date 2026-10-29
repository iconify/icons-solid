import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s7s6vmbwl.css';
import '../../css/v/v2qy5c52w.css';
import '../../css/i/i98n4_7xh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s7s6vmbwl"/><path class="v2qy5c52w"/><path class="i98n4_7xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hourglass-sketch"} {...others} />);
}

export default Component;
