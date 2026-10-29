import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/szgntebkh.css';
import '../../css/j/j58s40qqs.css';
import '../../css/g/g36yryw5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="szgntebkh wm-a"/><path class="j58s40qqs wm-k"/><path class="g36yryw5e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radio-sketch"} {...others} />);
}

export default Component;
