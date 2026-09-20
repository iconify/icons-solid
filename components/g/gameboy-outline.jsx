import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vngg99mcs.css';
import '../../css/j/j4bye4bll.css';
import '../../css/g/geif4f81p.css';
import '../../css/d/d86n5g0_a.css';
import '../../css/n/n-n9wgbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vngg99mcs"/><path class="j4bye4bll"/><path class="geif4f81p"/><path class="d86n5g0_a"/><path class="n-n9wgbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gameboy-outline"} {...others} />);
}

export default Component;
