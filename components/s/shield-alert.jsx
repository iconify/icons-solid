import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nawog-beq.css';
import '../../css/k/kgkm8njdk.css';
import '../../css/s/s5qhm57se.css';
import '../../css/s/sx40hko8u.css';
import '../../css/k/k03hu5bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nawog-beq wm-k"/><path class="kgkm8njdk wm-k"/><path class="s5qhm57se wm-k"/><path class="sx40hko8u wm-shine"/><path class="k03hu5bwu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shield-alert"} {...others} />);
}

export default Component;
