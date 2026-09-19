import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxpwcdeiu.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/y/yenz8u62p.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="mxpwcdeiu"/><path class="vsxun6bmm"/><path class="yenz8u62p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:hn"} {...others} />);
}

export default Component;
