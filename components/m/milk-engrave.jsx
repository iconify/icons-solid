import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uic09-b6z.css';
import '../../css/g/gdvhu285q.css';
import '../../css/l/l1pdc8-1w.css';
import '../../css/n/nhm3kcoqx.css';
import '../../css/o/ovzt3sbip.css';
import '../../css/w/w87_sfbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uic09-b6z wm-k"/><path class="gdvhu285q wm-a"/><path class="l1pdc8-1w wm-shadow"/><path class="nhm3kcoqx wm-k"/><path class="ovzt3sbip wm-k"/><path class="w87_sfbqc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:milk-engrave"} {...others} />);
}

export default Component;
