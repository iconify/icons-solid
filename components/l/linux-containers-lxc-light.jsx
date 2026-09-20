import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wap4fu7vn.css';
import '../../css/m/m85zrbbfy.css';
import '../../css/y/y1178jbwh.css';
import '../../css/l/l_u0qmb7a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wap4fu7vn"/><path class="m85zrbbfy"/><path class="y1178jbwh"/><path class="l_u0qmb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-containers-lxc-light"} {...others} />);
}

export default Component;
