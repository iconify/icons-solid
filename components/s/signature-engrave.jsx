import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sh_9j11bm.css';
import '../../css/p/p-zp6abgy.css';
import '../../css/a/au-aqdi1z.css';
import '../../css/z/z1gf-w-er.css';
import '../../css/q/qjoi1kboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sh_9j11bm wm-k"/><path class="p-zp6abgy wm-a"/><path class="au-aqdi1z wm-shadow"/><path class="wm-k z1gf-w-er"/><path class="qjoi1kboe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signature-engrave"} {...others} />);
}

export default Component;
