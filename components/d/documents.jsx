import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kygou91ff.css';
import '../../css/g/g6ff9lbxr.css';
import '../../css/e/exxqrpb6y.css';
import '../../css/t/tjyguc_ul.css';

const viewBox = {"width":34,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kygou91ff"/><path class="g6ff9lbxr"/><path class="exxqrpb6y"/><path class="tjyguc_ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:documents"} {...others} />);
}

export default Component;
