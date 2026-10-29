import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjvmaw2je.css';
import '../../css/u/u09_-ec4s.css';
import '../../css/e/evf_t2cfu.css';
import '../../css/w/w7qq1ntbn.css';
import '../../css/z/z8twkcj3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qjvmaw2je wm-k"/><path class="u09_-ec4s wm-a"/><path class="evf_t2cfu wm-shadow"/><path class="w7qq1ntbn wm-k"/><path class="wm-a z8twkcj3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sky-lantern-engrave"} {...others} />);
}

export default Component;
