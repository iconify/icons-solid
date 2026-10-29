import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f1zgeeb4m.css';
import '../../css/u/u7v3onpgn.css';
import '../../css/x/x6znfw3hn.css';
import '../../css/a/afoe1d7we.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f1zgeeb4m"/><path class="u7v3onpgn wm-k"/><path class="wm-a x6znfw3hn"/><path class="afoe1d7we wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bomb-sketch"} {...others} />);
}

export default Component;
