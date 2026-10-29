import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ku_lujd1a.css';
import '../../css/f/fzvhi0bnt.css';
import '../../css/m/mav1hqb9l.css';
import '../../css/g/g5u9bib3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ku_lujd1a wm-k"/><path class="fzvhi0bnt wm-k"/><path class="mav1hqb9l wm-k"/><path class="g5u9bib3y wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:drag-handle"} {...others} />);
}

export default Component;
