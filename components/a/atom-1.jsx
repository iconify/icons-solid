import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzk77ej0s.css';
import '../../css/t/t3tvcp-sa.css';
import '../../css/o/ontm3cbur.css';
import '../../css/r/rj2mcbcyu.css';
import '../../css/g/gywi0nb9g.css';
import '../../css/i/ir5gggqga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fzk77ej0s"/><path class="t3tvcp-sa"/><path class="ontm3cbur"/><path class="rj2mcbcyu"/><path class="gywi0nb9g"/><path class="ir5gggqga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:atom-1"} {...others} />);
}

export default Component;
