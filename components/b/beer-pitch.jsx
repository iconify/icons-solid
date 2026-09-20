import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxtlt7b7q.css';
import '../../css/q/qstkl7k-a.css';
import '../../css/l/lmkdduojj.css';
import '../../css/e/e6g7n5bmt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oxtlt7b7q"/><path class="qstkl7k-a"/><path class="lmkdduojj"/><path class="e6g7n5bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:beer-pitch"} {...others} />);
}

export default Component;
