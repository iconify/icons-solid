import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyw6smbbz.css';
import '../../css/z/z6jby4rpt.css';
import '../../css/z/zb716-bly.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="iyw6smbbz"/><path class="z6jby4rpt"/><path class="zb716-bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tt"} {...others} />);
}

export default Component;
