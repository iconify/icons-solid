import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/f9g5z2bmo.css';
import '../../css/k/kv6jg4bfo.css';
import '../../css/d/dxbxl11oo.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="f9g5z2bmo"/><path class="kv6jg4bfo"/><path class="dxbxl11oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:shuffle"} {...others} />);
}

export default Component;
