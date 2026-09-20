import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gntpgix9r.css';
import '../../css/f/f_aj-nbou.css';
import '../../css/o/opb6swbnp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gntpgix9r"/><path class="f_aj-nbou"/><path class="opb6swbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smoking-area"} {...others} />);
}

export default Component;
