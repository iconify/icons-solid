import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wd7ku9bht.css';
import '../../css/p/p111p0b4n.css';
import '../../css/u/u5lsx9bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wd7ku9bht wm-a"/><path class="p111p0b4n wm-k"/><path class="u5lsx9bzl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-sketch"} {...others} />);
}

export default Component;
