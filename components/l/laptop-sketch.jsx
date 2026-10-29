import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dom870b0k.css';
import '../../css/g/g83y6wzjj.css';
import '../../css/h/h7irlhbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dom870b0k wm-k"/><path class="g83y6wzjj wm-k"/><path class="h7irlhbzn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laptop-sketch"} {...others} />);
}

export default Component;
