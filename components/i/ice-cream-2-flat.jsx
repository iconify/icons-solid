import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dthu5j0fn.css';
import '../../css/g/gpcclie-k.css';
import '../../css/m/mmh2udtee.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dthu5j0fn"/><path clip-rule="evenodd" class="gpcclie-k"/><path clip-rule="evenodd" class="mmh2udtee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ice-cream-2-flat"} {...others} />);
}

export default Component;
