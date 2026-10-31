import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yye3sablr.css';
import '../../css/o/o3wjdwbqa.css';
import '../../css/a/a-x6jxbkq.css';
import '../../css/j/j20lmsbms.css';
import '../../css/w/wgsh7cb0j.css';
import '../../css/n/neqaiob_d.css';
import '../../css/e/euuuyn6ag.css';
import '../../css/a/a0c8svd-q.css';
import '../../css/c/cuz3-yh3h.css';
import '../../css/h/hcedrd4us.css';
import '../../css/j/jxd4xcbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow yye3sablr"/><path class="o3wjdwbqa"/><path class="a-x6jxbkq"/><path class="j20lmsbms"/><path class="wgsh7cb0j"/><path class="neqaiob_d"/><path class="euuuyn6ag"/><path class="a0c8svd-q"/><path class="cuz3-yh3h wm-shine"/><path class="hcedrd4us"/><path class="jxd4xcbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:door-open"} {...others} />);
}

export default Component;
