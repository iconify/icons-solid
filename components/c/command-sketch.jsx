import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1bc0mbkh.css';
import '../../css/d/dvqgg3bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l1bc0mbkh wm-k"/><path class="dvqgg3bxu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:command-sketch"} {...others} />);
}

export default Component;
