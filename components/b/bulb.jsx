import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/eiozqg0ff.css';
import '../../css/j/jhsbs6box.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="eiozqg0ff"/><path class="jhsbs6box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:bulb"} {...others} />);
}

export default Component;
