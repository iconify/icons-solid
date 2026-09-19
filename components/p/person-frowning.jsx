import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w30jv-b-s.css';
import '../../css/i/iv8w_dbym.css';
import '../../css/a/aty_n4ufu.css';
import '../../css/w/wa6p8hbyo.css';
import '../../css/i/i8vmceb0o.css';
import '../../css/c/cqk42sbxn.css';
import '../../css/j/jm05d7b8e.css';
import '../../css/f/ftnj38j1k.css';
import '../../css/o/o1ste-kao.css';
import '../../css/g/gflxfxb0i.css';
import '../../css/w/w9_o5cb3j.css';
import '../../css/s/spv3lqx-b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w30jv-b-s"/><path class="iv8w_dbym"/><path class="aty_n4ufu"/><path class="wa6p8hbyo"/><path class="i8vmceb0o"/><path class="cqk42sbxn"/><path class="jm05d7b8e"/><path class="ftnj38j1k"/><path class="o1ste-kao"/><path class="gflxfxb0i"/><path class="w9_o5cb3j"/><path class="spv3lqx-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-frowning"} {...others} />);
}

export default Component;
