import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk-e89f9b.css';
import '../../css/m/mhilw14xe.css';
import '../../css/x/xjexkabcq.css';
import '../../css/s/ssr5o-bim.css';

const viewBox = {"width":42,"height":42,"top":-1};
const content = `<g class="ft5dv1b6b"><path class="hk-e89f9b"/><path class="mhilw14xe"/><path class="xjexkabcq"/><path class="ssr5o-bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bug"} {...others} />);
}

export default Component;
