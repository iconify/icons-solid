import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwiql9bbm.css';
import '../../css/h/ho-ed7bnk.css';
import '../../css/x/xxjm77_er.css';
import '../../css/m/m5ja6kbtf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwiql9bbm"/><path class="ho-ed7bnk"/><path class="xxjm77_er"/><path class="m5ja6kbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:holyarrs"} {...others} />);
}

export default Component;
