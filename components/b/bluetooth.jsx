import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g58wglb8d.css';
import '../../css/k/khl5cqycc.css';
import '../../css/r/r53364bzb.css';
import '../../css/h/he1fsn0cu.css';
import '../../css/j/jnfvwup2i.css';
import '../../css/k/kjvw-9bak.css';
import '../../css/l/lvm8guw_e.css';
import '../../css/n/nb6mrjbin.css';
import '../../css/v/vdkh5wbyd.css';
import '../../css/t/tc6ky5bje.css';
import '../../css/c/c9qdh2k-i.css';
import '../../css/q/qz74a2bdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g58wglb8d wm-shadow"/><path class="khl5cqycc"/><path class="r53364bzb"/><path class="he1fsn0cu"/><path class="jnfvwup2i"/><path class="kjvw-9bak"/><path class="lvm8guw_e"/><path class="nb6mrjbin"/><path class="vdkh5wbyd"/><path class="tc6ky5bje"/><path class="c9qdh2k-i wm-shine"/><path class="qz74a2bdv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:bluetooth"} {...others} />);
}

export default Component;
