import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cze11obha.css';
import '../../css/w/wkurmibxy.css';
import '../../css/z/zb716-bly.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="cze11obha"/><path class="wkurmibxy"/><path class="zb716-bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tt"} {...others} />);
}

export default Component;
