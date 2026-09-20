import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvsrflb8k.css';
import '../../css/m/mxkzlzb-o.css';
import '../../css/v/v0fihomyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dvsrflb8k"/><path class="mxkzlzb-o"/><path class="v0fihomyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:baseball-duo"} {...others} />);
}

export default Component;
