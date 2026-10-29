import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcm9ks5fs.css';
import '../../css/q/q-h7-wwyw.css';
import '../../css/c/cgkkx-p8k.css';
import '../../css/i/i_96n2bzt.css';
import '../../css/a/ax7wuf0jd.css';
import '../../css/j/jnz3srjkt.css';
import '../../css/z/zqnzl7yhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qcm9ks5fs wm-k"/><path class="q-h7-wwyw wm-k"/><path class="cgkkx-p8k wm-k"/><path class="i_96n2bzt wm-a"/><path class="ax7wuf0jd wm-a"/><path class="jnz3srjkt wm-a"/><path class="wm-deco zqnzl7yhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:flame"} {...others} />);
}

export default Component;
