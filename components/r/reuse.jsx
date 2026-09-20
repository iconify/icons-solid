import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/igb9ee7qs.css';
import '../../css/t/tlino87gl.css';
import '../../css/r/r-ctfne6x.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="igb9ee7qs"/><path class="tlino87gl"/><path class="r-ctfne6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:reuse"} {...others} />);
}

export default Component;
