import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osczg8bol.css';
import '../../css/b/bnsx8gbka.css';
import '../../css/y/yb1t-pwor.css';
import '../../css/o/ogh4q1bay.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osczg8bol"/><path class="bnsx8gbka"/><path class="yb1t-pwor"/><path class="ogh4q1bay"/><path class="s6qd-zbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-send-bold-duotone"} {...others} />);
}

export default Component;
