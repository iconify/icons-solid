import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6qay1xjw.css';
import '../../css/q/qutfy0qah.css';
import '../../css/y/yj4j86lvy.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="s6qay1xjw"/><path class="qutfy0qah"/><path class="yj4j86lvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-rotary-first-right-filled"} {...others} />);
}

export default Component;
