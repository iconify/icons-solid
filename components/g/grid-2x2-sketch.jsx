import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xpk-u_b6m.css';
import '../../css/n/nq3ku6b8r.css';
import '../../css/c/czpi4dbkk.css';
import '../../css/l/lp9350hqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xpk-u_b6m"/><path class="nq3ku6b8r wm-a"/><path class="czpi4dbkk wm-k"/><path class="lp9350hqv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grid-2x2-sketch"} {...others} />);
}

export default Component;
