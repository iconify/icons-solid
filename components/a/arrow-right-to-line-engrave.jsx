import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uvnqbw1ky.css';
import '../../css/e/e2vntlx_k.css';
import '../../css/t/tavb7nbpf.css';
import '../../css/s/s-orxf9cs.css';
import '../../css/z/z-jqc1b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uvnqbw1ky wm-k"/><path class="e2vntlx_k wm-a"/><path class="tavb7nbpf wm-shadow"/><path class="s-orxf9cs wm-a"/><path class="wm-k z-jqc1b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-to-line-engrave"} {...others} />);
}

export default Component;
