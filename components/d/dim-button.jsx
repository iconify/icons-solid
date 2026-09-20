import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/larysibsv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dop23ibmn.css';
import '../../css/t/tkfk-sbea.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="larysibsv"/><g class="ij2x_72vy"><circle class="dop23ibmn"/><path class="tkfk-sbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dim-button"} {...others} />);
}

export default Component;
