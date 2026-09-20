import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/e/e37ufl3ho.css';
import '../../css/g/ggfupccxg.css';
import '../../css/o/o1vl9p6bx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="e37ufl3ho"/><path class="ggfupccxg"/><path class="o1vl9p6bx"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-israel"} {...others} />);
}

export default Component;
