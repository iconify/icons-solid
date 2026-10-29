import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vys_njbbu.css';
import '../../css/b/b34zc16tc.css';
import '../../css/b/bncus0vco.css';
import '../../css/s/ssadnlb_w.css';
import '../../css/r/r2o5n7qei.css';
import '../../css/p/plwqyqbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vys_njbbu wm-k"/><path class="b34zc16tc wm-a"/><path class="bncus0vco wm-shadow"/><path class="ssadnlb_w wm-k"/><path class="r2o5n7qei wm-k"/><path class="plwqyqbee wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-tiger-engrave"} {...others} />);
}

export default Component;
