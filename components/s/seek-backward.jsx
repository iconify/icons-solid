import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/o/ox6mv7ofr.css';
import '../../css/f/f840z-b6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><rect class="ox6mv7ofr"/><path class="f840z-b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-backward"} {...others} />);
}

export default Component;
