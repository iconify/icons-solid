import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilpmhobzb.css';
import '../../css/c/cpu66jxwf.css';
import '../../css/c/ccslk7bmd.css';
import '../../css/v/vfxex8bos.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ilpmhobzb wm-k"/><path class="cpu66jxwf wm-shine"/><path class="ccslk7bmd wm-shine"/><path class="vfxex8bos wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-plus"} {...others} />);
}

export default Component;
