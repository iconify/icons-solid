import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-k-ldbym.css';
import '../../css/f/f_-6zw7bb.css';
import '../../css/r/rq7mwwplu.css';
import '../../css/o/o9nmwxh-q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="l-k-ldbym"/><path class="f_-6zw7bb"/><path class="rq7mwwplu"/><path class="o9nmwxh-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dhammajak"} {...others} />);
}

export default Component;
