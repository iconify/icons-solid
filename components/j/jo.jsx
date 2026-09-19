import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-ootbbzy.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/y/ybkrwsx3r.css';
import '../../css/x/xkfgu8b_c.css';
import '../../css/z/zj_0t9mwe.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="x-ootbbzy"/><path class="vsxun6bmm"/><path class="ybkrwsx3r"/><path class="xkfgu8b_c"/><path class="zj_0t9mwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:jo"} {...others} />);
}

export default Component;
