import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/se42xybiv.css';
import '../../css/f/fksg71bpx.css';
import '../../css/t/t0spev3hn.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="se42xybiv wm-k"/><path class="fksg71bpx wm-a"/><path class="t0spev3hn wm-shadow"/><path class="dfr8kabwp wm-k"/><path class="omdwggbcq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bitcoin-engrave"} {...others} />);
}

export default Component;
