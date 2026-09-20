import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s-6b-h1do.css';
import '../../css/h/h0mz56qad.css';
import '../../css/w/wtotfkwny.css';
import '../../css/b/bkqrqjg7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="s-6b-h1do"/><path class="h0mz56qad"/><path class="wtotfkwny"/><path class="bkqrqjg7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:code-qr"} {...others} />);
}

export default Component;
