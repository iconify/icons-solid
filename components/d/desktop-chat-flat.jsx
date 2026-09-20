import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj4ru8bao.css';
import '../../css/r/rmen95bko.css';
import '../../css/k/kyqtxmu_j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vj4ru8bao"/><path class="rmen95bko"/><path clip-rule="evenodd" class="kyqtxmu_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-chat-flat"} {...others} />);
}

export default Component;
