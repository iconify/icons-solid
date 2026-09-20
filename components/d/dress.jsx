import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucvq9ubqm.css';
import '../../css/h/h8svhkb0l.css';
import '../../css/s/su4crqbgo.css';
import '../../css/x/xswgfabro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ucvq9ubqm"/><path class="h8svhkb0l"/><path class="su4crqbgo"/><path class="xswgfabro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:dress"} {...others} />);
}

export default Component;
