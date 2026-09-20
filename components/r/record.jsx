import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/woosq8bsw.css';
import '../../css/u/umdw3u1ns.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><circle class="woosq8bsw"/><circle class="umdw3u1ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:record"} {...others} />);
}

export default Component;
