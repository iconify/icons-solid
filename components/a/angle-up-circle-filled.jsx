import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/o/o08e_obkq.css';
import '../../css/p/pgrcwbbij.css';
import '../../css/i/i6g2rfvcc.css';
import '../../css/t/tu6eh3b_x.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="o08e_obkq"/><path class="pgrcwbbij"/><path class="i6g2rfvcc"/><path class="tu6eh3b_x"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:angle-up-circle-filled"} {...others} />);
}

export default Component;
