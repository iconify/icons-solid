import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ck55j8b8a.css';
import '../../css/q/qib6t71cp.css';
import '../../css/l/lmo_-j63h.css';
import '../../css/w/wmvanjksm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ck55j8b8a wm-k"/><path class="qib6t71cp wm-a"/><path class="lmo_-j63h wm-k"/><path class="wm-a wmvanjksm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:recycle-sketch"} {...others} />);
}

export default Component;
