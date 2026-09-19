import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8d--wbzd.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/w/w8lft_h8f.css';
import '../../css/j/jxpk3fbzd.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="f8d--wbzd"/><path class="vsxun6bmm"/><path class="w8lft_h8f"/><path class="jxpk3fbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sd"} {...others} />);
}

export default Component;
