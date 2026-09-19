import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpb1racfq.css';
import '../../css/b/b1as24bsj.css';
import '../../css/g/g0hzz3ziz.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="fpb1racfq"/><path class="b1as24bsj"/><path class="g0hzz3ziz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:am"} {...others} />);
}

export default Component;
