import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-egyzb8n.css';
import '../../css/m/mv2uybkwg.css';
import '../../css/d/dyg_onssg.css';
import '../../css/m/me0dii31i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r-egyzb8n"/><path class="mv2uybkwg"/><path class="dyg_onssg"/><path class="me0dii31i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:widget"} {...others} />);
}

export default Component;
