import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqh6j4b-s.css';
import '../../css/d/d-o67lbcz.css';
import '../../css/x/x8q5aol2t.css';
import '../../css/j/j-o5shb-y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zqh6j4b-s"/><path class="d-o67lbcz"/><path class="x8q5aol2t"/><path class="j-o5shb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chess-pawn"} {...others} />);
}

export default Component;
