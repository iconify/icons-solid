import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xj9d_v-vw.css';
import '../../css/o/o2g203bwr.css';
import '../../css/j/j3gpyrbsg.css';
import '../../css/x/xoubw7bho.css';
import '../../css/o/o5gu49bnw.css';
import '../../css/z/z3q-dbcom.css';
import '../../css/e/ep53gmb8n.css';
import '../../css/l/ly-pzwbqd.css';
import '../../css/r/rrroy_q0q.css';
import '../../css/u/uuvd2r3rk.css';
import '../../css/h/hdw6e4bbp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xj9d_v-vw"/><path class="o2g203bwr"/><path class="j3gpyrbsg"/><path class="xoubw7bho"/><path class="o5gu49bnw"/><path class="z3q-dbcom"/><path class="ep53gmb8n"/><path class="ly-pzwbqd"/><path class="rrroy_q0q"/><path class="uuvd2r3rk"/><path class="hdw6e4bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:knot"} {...others} />);
}

export default Component;
