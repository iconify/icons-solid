import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/x/xckpabcxu.css';
import '../../css/q/qgn2embbm.css';
import '../../css/w/wihcyz8cw.css';
import '../../css/p/pc77monrj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="xckpabcxu"/><path class="qgn2embbm"/><path class="wihcyz8cw"/><path class="pc77monrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:meteor-duo"} {...others} />);
}

export default Component;
