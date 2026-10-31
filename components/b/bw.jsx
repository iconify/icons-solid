import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zsevqi0bl.css';
import '../../css/d/d0dadzbwi.css';
import '../../css/w/w5cem9faf.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="zsevqi0bl"/><path class="d0dadzbwi"/><path class="w5cem9faf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bw"} {...others} />);
}

export default Component;
