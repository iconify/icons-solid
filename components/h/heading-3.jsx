import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/l/l4xws5bgs.css';
import '../../css/j/jioj02bcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="l4xws5bgs wm-s"/><path class="jioj02bcw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heading-3"} {...others} />);
}

export default Component;
