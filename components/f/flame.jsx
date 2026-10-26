import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p8_jezbca.css';
import '../../css/j/jiegxjirx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="p8_jezbca"/><path class="jiegxjirx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:flame"} {...others} />);
}

export default Component;
