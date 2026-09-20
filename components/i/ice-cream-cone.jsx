import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgib3ubrn.css';
import '../../css/l/lwox9cc-w.css';
import '../../css/w/wwzq2hb9q.css';
import '../../css/g/giwwpbbyy.css';
import '../../css/h/hoxdrqbvi.css';
import '../../css/k/k50ow2b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wgib3ubrn"/><path class="lwox9cc-w"/><path class="wwzq2hb9q"/><path class="giwwpbbyy"/><path class="hoxdrqbvi"/><path class="k50ow2b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ice-cream-cone"} {...others} />);
}

export default Component;
