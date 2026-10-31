import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/esihx-bwz.css';
import '../../css/n/ngp1fcxon.css';
import '../../css/j/jnalvebys.css';
import '../../css/z/zxr0eut_q.css';
import '../../css/g/g8rhz-b7f.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/a/ay7h_zcvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="esihx-bwz wm-shadow"/><path class="ngp1fcxon"/><path class="jnalvebys"/><path class="zxr0eut_q"/><path class="g8rhz-b7f"/><path class="kx3zikbiq"/><path class="ay7h_zcvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-man-afro"} {...others} />);
}

export default Component;
