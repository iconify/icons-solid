import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yec81qbcc.css';
import '../../css/k/k1cl4ekoc.css';
import '../../css/t/tvtf0bi8n.css';
import '../../css/c/c0oel-bka.css';
import '../../css/b/b5tvhkbxz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yec81qbcc"/><path clip-rule="evenodd" class="k1cl4ekoc"/><path class="tvtf0bi8n"/><path class="c0oel-bka"/><path class="b5tvhkbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:high-speed-train-front"} {...others} />);
}

export default Component;
