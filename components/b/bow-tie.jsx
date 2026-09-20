import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6-96c4go.css';
import '../../css/z/z3s_j730l.css';
import '../../css/f/fjuxbloss.css';
import '../../css/f/f3xmpdzii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v6-96c4go"/><path class="z3s_j730l"/><path class="fjuxbloss"/><path class="f3xmpdzii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bow-tie"} {...others} />);
}

export default Component;
