import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nxrh6pc1r.css';
import '../../css/j/j3czu2bly.css';
import '../../css/r/rxzr1qb1y.css';
import '../../css/f/fwu-keboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nxrh6pc1r"/><path class="j3czu2bly wm-k"/><path class="rxzr1qb1y wm-k"/><path class="fwu-keboc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wine-sketch"} {...others} />);
}

export default Component;
