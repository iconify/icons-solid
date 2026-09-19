import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/umfbp7kgz.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/a/an-j2gbcb.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="umfbp7kgz"/><path class="g7z2j-78e"/><path class="an-j2gbcb"/><path class="c1t--rtgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:joystick"} {...others} />);
}

export default Component;
