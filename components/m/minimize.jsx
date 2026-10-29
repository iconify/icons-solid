import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/c/ckxvcsu0v.css';
import '../../css/l/ly5_b1bnv.css';
import '../../css/g/gjrq14sgm.css';
import '../../css/b/b3gxtltfq.css';
import '../../css/o/oucp1ub4i.css';
import '../../css/n/nmvtkwbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s53vmbcgz"><path class="ckxvcsu0v wm-k"/><path class="ly5_b1bnv wm-k"/><path class="gjrq14sgm wm-k"/><path class="b3gxtltfq wm-k"/><path class="oucp1ub4i wm-deco"/><path class="nmvtkwbjh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:minimize"} {...others} />);
}

export default Component;
