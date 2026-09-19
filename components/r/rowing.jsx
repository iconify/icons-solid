import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/i/iwk23h8tf.css';
import '../../css/j/jkcu7kbhq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="iwk23h8tf"/><path class="jkcu7kbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rowing"} {...others} />);
}

export default Component;
