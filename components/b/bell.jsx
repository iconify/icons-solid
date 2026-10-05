import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ryfxsnb7k.css';
import '../../css/t/t3g9whbyu.css';
import '../../css/f/fdp_8i46o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ryfxsnb7k"/><path class="t3g9whbyu"/><path class="fdp_8i46o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bell"} {...others} />);
}

export default Component;
