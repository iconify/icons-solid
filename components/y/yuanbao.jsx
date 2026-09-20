import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw1pi9cpe.css';
import '../../css/l/ldcc6fbjt.css';
import '../../css/i/in_j66beg.css';
import '../../css/p/psw28h88l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw1pi9cpe"/><path class="ldcc6fbjt"/><path class="in_j66beg"/><path class="psw28h88l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yuanbao"} {...others} />);
}

export default Component;
