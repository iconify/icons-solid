import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o_kozsbwc.css';
import '../../css/o/olg4m4bgm.css';
import '../../css/n/n9fzp5b5o.css';
import '../../css/r/rp9c5jbdr.css';
import '../../css/x/xq8rrbbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o_kozsbwc wm-a"/><path class="olg4m4bgm wm-s"/><path class="n9fzp5b5o wm-k"/><path class="rp9c5jbdr wm-a"/><path class="wm-s xq8rrbbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-scroll-sketch"} {...others} />);
}

export default Component;
