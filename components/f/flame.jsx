import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/y-8fig6gi.css';
import '../../css/k/kkoib3uqn.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="y-8fig6gi"/><path class="kkoib3uqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:flame"} {...others} />);
}

export default Component;
