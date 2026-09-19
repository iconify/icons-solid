import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6nw0jxpm.css';
import '../../css/i/iibccoean.css';
import '../../css/a/aty_n4ufu.css';
import '../../css/p/ps1vbr9ph.css';
import '../../css/s/si310rbti.css';
import '../../css/j/jm05d7b8e.css';
import '../../css/c/cqk42sbxn.css';
import '../../css/t/tuyah0tvm.css';
import '../../css/d/d7v2y1neo.css';
import '../../css/r/rzcb49bbj.css';
import '../../css/a/a_3nr6b5v.css';
import '../../css/u/u16wxhvrs.css';
import '../../css/b/bi8wj9jtc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o6nw0jxpm"/><path class="iibccoean"/><path class="aty_n4ufu"/><path class="ps1vbr9ph"/><path class="si310rbti"/><path class="jm05d7b8e"/><path class="cqk42sbxn"/><path class="tuyah0tvm"/><path class="d7v2y1neo"/><path class="rzcb49bbj"/><path class="a_3nr6b5v"/><path class="u16wxhvrs"/><path class="bi8wj9jtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-frowning"} {...others} />);
}

export default Component;
