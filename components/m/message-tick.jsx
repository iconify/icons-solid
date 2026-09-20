import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rky7wibpq.css';
import '../../css/t/tf03ofs8g.css';
import '../../css/p/p5e0pi07v.css';
import '../../css/x/xk1jz7llc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rky7wibpq"/><path class="tf03ofs8g"/><path class="p5e0pi07v"/><path class="xk1jz7llc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-tick"} {...others} />);
}

export default Component;
