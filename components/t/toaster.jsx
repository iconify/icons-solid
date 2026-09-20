import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n93up_bbp.css';
import '../../css/z/zudcgcbes.css';
import '../../css/h/ham0q6h3y.css';
import '../../css/m/mqksp_lzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n93up_bbp"/><path class="zudcgcbes"/><circle class="ham0q6h3y"/><path class="mqksp_lzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:toaster"} {...others} />);
}

export default Component;
