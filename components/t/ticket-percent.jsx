import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4u9oyjyn.css';
import '../../css/c/cvle9jjke.css';
import '../../css/h/hu65jmb6g.css';
import '../../css/n/nzdk-8bxr.css';
import '../../css/v/vvu4z4b5h.css';
import '../../css/n/nutvdv9jk.css';
import '../../css/b/bokqdbbub.css';
import '../../css/f/fi9aoft_a.css';
import '../../css/w/w9y44nl6e.css';
import '../../css/o/oj98p58_r.css';
import '../../css/n/n0peue7oy.css';
import '../../css/o/oequqc89e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w4u9oyjyn wm-k"/><path class="cvle9jjke wm-k"/><path class="hu65jmb6g wm-k"/><path class="nzdk-8bxr wm-k"/><path class="vvu4z4b5h wm-shine"/><path class="nutvdv9jk wm-k"/><path class="bokqdbbub wm-k"/><path class="fi9aoft_a wm-k"/><path class="w9y44nl6e wm-k"/><path class="oj98p58_r wm-k"/><path class="n0peue7oy wm-k"/><path class="oequqc89e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ticket-percent"} {...others} />);
}

export default Component;
