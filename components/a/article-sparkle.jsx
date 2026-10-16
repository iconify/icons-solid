import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycpcl7h-q.css';
import '../../css/y/y7_vm2bwm.css';
import '../../css/k/kqqt3jirm.css';
import '../../css/b/biup5i_kp.css';
import '../../css/g/g3c0occta.css';
import '../../css/l/l6_iqd_-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ycpcl7h-q"/><path class="y7_vm2bwm"/><rect transform="matrix(-1 0 0 1 16.67 5.78)" class="kqqt3jirm"/><path class="biup5i_kp"/><path class="g3c0occta"/><path class="l6_iqd_-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:article-sparkle"} {...others} />);
}

export default Component;
