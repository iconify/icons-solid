import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x41hzt5kl.css';
import '../../css/t/tikrxg4mx.css';
import '../../css/k/ksu2s41sc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x41hzt5kl"/><path class="tikrxg4mx"/><path class="ksu2s41sc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-rich"} {...others} />);
}

export default Component;
