import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_0ol5bde.css';
import '../../css/q/qiikibbxh.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="e_0ol5bde"/><path class="qiikibbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ma"} {...others} />);
}

export default Component;
