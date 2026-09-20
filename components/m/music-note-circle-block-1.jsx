import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvnu1_efy.css';
import '../../css/r/rvigqgboc.css';
import '../../css/t/tfbf76z-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tvnu1_efy"/><path class="rvigqgboc"/><path class="tfbf76z-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:music-note-circle-block-1"} {...others} />);
}

export default Component;
