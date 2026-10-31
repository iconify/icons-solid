import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo6h90b_z.css';
import '../../css/q/qfnc18b1r.css';
import '../../css/p/pt6my3r3u.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="vo6h90b_z"/><path class="qfnc18b1r"/><path class="pt6my3r3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cr"} {...others} />);
}

export default Component;
