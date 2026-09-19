import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qorhmmb2p.css';
import '../../css/p/pe7dhubax.css';
import '../../css/s/sxlhkwblw.css';
import '../../css/s/skr4s9e3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qorhmmb2p"/><path class="pe7dhubax"/><path class="sxlhkwblw"/><path class="skr4s9e3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blood-bottle"} {...others} />);
}

export default Component;
