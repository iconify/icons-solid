import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbzksu78q.css';
import '../../css/e/enhzqsbdl.css';
import '../../css/n/n04na1btn.css';
import '../../css/v/vxg4k9b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kbzksu78q wm-k"/><path class="enhzqsbdl wm-k"/><path class="n04na1btn wm-k"/><path class="vxg4k9b0f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:square"} {...others} />);
}

export default Component;
