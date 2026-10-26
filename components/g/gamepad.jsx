import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/oyoh77bru.css';
import '../../css/u/u5iib_b-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="oyoh77bru"/><path class="u5iib_b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:gamepad"} {...others} />);
}

export default Component;
