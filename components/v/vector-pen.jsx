import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duel6bclb.css';
import '../../css/q/qwmzgxnla.css';
import '../../css/r/r-tyn1bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="duel6bclb"/><path class="qwmzgxnla"/><path class="r-tyn1bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:vector-pen"} {...others} />);
}

export default Component;
