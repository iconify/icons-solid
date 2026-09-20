import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_zewcbzr.css';
import '../../css/r/re72p-hbb.css';
import '../../css/q/qpck-_2xs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d_zewcbzr"/><path class="re72p-hbb"/><path class="qpck-_2xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ipod-player"} {...others} />);
}

export default Component;
