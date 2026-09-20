import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzxkiu5ie.css';
import '../../css/x/xpa0b3bpk.css';
import '../../css/j/jt3_xabug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pzxkiu5ie"><path clip-rule="evenodd" class="xpa0b3bpk"/><path class="jt3_xabug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cerebras"} {...others} />);
}

export default Component;
