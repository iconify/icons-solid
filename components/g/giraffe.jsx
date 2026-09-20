import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcxl47p1u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kyle7dbca.css';
import '../../css/j/js3pfvnsz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fcxl47p1u"/><g class="ij2x_72vy"><path class="kyle7dbca"/><path class="js3pfvnsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:giraffe"} {...others} />);
}

export default Component;
