import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ver3u5bkf.css';
import '../../css/t/ta6kiz2pu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/m1jc5t6-l.css';
import '../../css/u/u1v6mx2du.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ver3u5bkf"/><path class="ta6kiz2pu"/><g class="ij2x_72vy"><path class="m1jc5t6-l"/><path class="u1v6mx2du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mountain"} {...others} />);
}

export default Component;
