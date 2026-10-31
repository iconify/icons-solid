import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_zss3bji.css';
import '../../css/r/rklx2ybas.css';
import '../../css/j/jczna1e8c.css';
import '../../css/r/rl8n7w7ad.css';
import '../../css/j/jmr-hrbee.css';
import '../../css/b/b_46y8gyw.css';
import '../../css/q/qqg51peam.css';
import '../../css/o/oxx01qrhe.css';
import '../../css/v/v7gk-nbac.css';
import '../../css/f/fl1vnaiyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_zss3bji wm-shadow"/><path class="rklx2ybas wm-a"/><path class="jczna1e8c wm-a"/><path class="rl8n7w7ad wm-a"/><path class="jmr-hrbee wm-shine"/><path class="b_46y8gyw wm-k"/><path class="qqg51peam wm-k"/><path class="oxx01qrhe wm-k"/><path class="v7gk-nbac wm-k"/><path class="fl1vnaiyl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:scan"} {...others} />);
}

export default Component;
