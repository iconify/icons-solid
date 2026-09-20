import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr24jkwsh.css';
import '../../css/a/ao18k45ue.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/ducf-wbyw.css';
import '../../css/n/nhrj7sblw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jr24jkwsh"/><path class="ao18k45ue"/><g class="ij2x_72vy"><path class="ducf-wbyw"/><path class="nhrj7sblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orca"} {...others} />);
}

export default Component;
