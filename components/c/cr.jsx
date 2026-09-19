import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5ckajb4i.css';
import '../../css/k/ka6oddeze.css';
import '../../css/v/v3lupybhi.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="t5ckajb4i"/><path class="ka6oddeze"/><path class="v3lupybhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cr"} {...others} />);
}

export default Component;
