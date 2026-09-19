import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5hgvabpm.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/w/w8lft_h8f.css';
import '../../css/k/kgrj5g7tp.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="d5hgvabpm"/><path class="vsxun6bmm"/><path class="w8lft_h8f"/><path class="kgrj5g7tp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ae"} {...others} />);
}

export default Component;
