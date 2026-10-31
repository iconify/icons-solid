import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/brnw3yb8d.css';
import '../../css/i/iti46pajo.css';
import '../../css/v/vaddffiao.css';
import '../../css/p/psgmu884p.css';
import '../../css/b/b2n8qcoxh.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="brnw3yb8d"/><path class="iti46pajo"/><path class="vaddffiao wm-shine"/><path class="psgmu884p wm-k"/><path class="b2n8qcoxh wm-a"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:save-all"} {...others} />);
}

export default Component;
