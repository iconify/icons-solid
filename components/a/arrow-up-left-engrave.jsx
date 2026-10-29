import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ofk9q-bmu.css';
import '../../css/h/hdr-12bxz.css';
import '../../css/b/b2-9zihvx.css';
import '../../css/r/rir49oswk.css';
import '../../css/q/qbet6fbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ofk9q-bmu wm-k"/><path class="hdr-12bxz wm-a"/><path class="b2-9zihvx wm-shadow"/><path class="rir49oswk wm-k"/><path class="qbet6fbaw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-left-engrave"} {...others} />);
}

export default Component;
