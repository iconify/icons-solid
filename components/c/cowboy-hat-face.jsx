import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udv77ub2h.css';
import '../../css/n/n_f77jb-q.css';
import '../../css/o/ok88stbzi.css';
import '../../css/z/zjbqhubqv.css';
import '../../css/j/jbvuxtiii.css';
import '../../css/b/bqlgbbqyo.css';
import '../../css/x/xwsrq7b-c.css';
import '../../css/b/bzn-ftb3a.css';
import '../../css/v/vvtvq36dm.css';
import '../../css/d/dbulsy8xw.css';
import '../../css/o/o-oo6zb7b.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="udv77ub2h"/><path class="n_f77jb-q"/><path class="ok88stbzi"/><path class="zjbqhubqv"/><path class="jbvuxtiii"/><ellipse class="bqlgbbqyo"/><ellipse class="xwsrq7b-c"/><path class="bzn-ftb3a"/><path class="vvtvq36dm"/><path class="dbulsy8xw"/><path class="o-oo6zb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cowboy-hat-face"} {...others} />);
}

export default Component;
