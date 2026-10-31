import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uzcv14ctn.css';
import '../../css/i/i0vw5hlyl.css';
import '../../css/j/j6egxdb-x.css';
import '../../css/f/flbsvpbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uzcv14ctn"/><path class="i0vw5hlyl wm-shine"/><path class="j6egxdb-x wm-k"/><path class="flbsvpbyj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-funnel"} {...others} />);
}

export default Component;
