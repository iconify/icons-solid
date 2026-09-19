import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xxtf9bhqn.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/i/iuqbgubxq.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xxtf9bhqn"/><path class="g7z2j-78e"/><path class="iuqbgubxq"/><path class="c1t--rtgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:joystick"} {...others} />);
}

export default Component;
