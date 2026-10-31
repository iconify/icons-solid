import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mw_sj1dvg.css';
import '../../css/y/yrnv22bjh.css';
import '../../css/c/cctzrl-0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mw_sj1dvg"/><path class="yrnv22bjh"/><path class="cctzrl-0g wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bone"} {...others} />);
}

export default Component;
