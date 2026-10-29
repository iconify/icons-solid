import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j-qg7ebxo.css';
import '../../css/w/w5n6u14pg.css';
import '../../css/e/eu72xbb2n.css';
import '../../css/u/u0mnjm2fa.css';
import '../../css/c/c1xzn3b5a.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/q/qoz-d9jye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j-qg7ebxo wm-k"/><path class="w5n6u14pg wm-a"/><path class="eu72xbb2n wm-s"/><path class="u0mnjm2fa wm-shadow"/><path class="c1xzn3b5a wm-k"/><path class="sxdzfouvy wm-a"/><path class="qoz-d9jye wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunrise-engrave"} {...others} />);
}

export default Component;
