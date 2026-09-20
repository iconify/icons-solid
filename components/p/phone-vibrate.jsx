import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p3-_4go3t.css';
import '../../css/s/sqcoqw8mq.css';
import '../../css/f/fjlt6hboo.css';
import '../../css/x/xw1j3gbjr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p3-_4go3t"/><path class="sqcoqw8mq"/><path class="fjlt6hboo"/><path class="xw1j3gbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:phone-vibrate"} {...others} />);
}

export default Component;
