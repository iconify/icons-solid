import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/covww4msz.css';
import '../../css/z/zagf257-n.css';
import '../../css/m/mk27b2hxz.css';
import '../../css/e/eik1jzbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="covww4msz"/><path class="wm-a zagf257-n"/><path class="mk27b2hxz wm-k"/><path class="eik1jzbty wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dholak-sketch"} {...others} />);
}

export default Component;
