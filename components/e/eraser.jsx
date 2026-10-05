import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/pe5iwv8nt.css';
import '../../css/o/o0o9wu-8v.css';
import '../../css/d/ddyhhlb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="pe5iwv8nt"/><path class="o0o9wu-8v"/><path class="ddyhhlb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:eraser"} {...others} />);
}

export default Component;
