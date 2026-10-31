import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unwymgvyf.css';
import '../../css/l/ly-jbabfh.css';
import '../../css/d/d-dgfcbcn.css';
import '../../css/a/a-m5sccrs.css';
import '../../css/i/i_amn0bjx.css';
import '../../css/u/ubwsarbrp.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="unwymgvyf wm-k"/><path class="ly-jbabfh wm-deco"/><path class="d-dgfcbcn wm-k"/><path class="a-m5sccrs wm-k"/><path class="i_amn0bjx wm-shadow"/><path class="ubwsarbrp wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-lock"} {...others} />);
}

export default Component;
