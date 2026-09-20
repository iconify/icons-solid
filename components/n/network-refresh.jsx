import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mxng0acwk.css';
import '../../css/l/l439blbrs.css';
import '../../css/c/ccyx194mo.css';
import '../../css/g/giisuu82f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="mxng0acwk"/><path class="l439blbrs"/><path class="ccyx194mo"/><path class="giisuu82f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:network-refresh"} {...others} />);
}

export default Component;
