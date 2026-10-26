import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xngn5jblq.css';
import '../../css/w/wxjaaj_0c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="xngn5jblq"/><path class="wxjaaj_0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:book"} {...others} />);
}

export default Component;
