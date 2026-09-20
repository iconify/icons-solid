import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/h/h8ttso15c.css';
import '../../css/v/v3qt78b_j.css';
import '../../css/v/vh35ama0y.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="h8ttso15c"/><path class="v3qt78b_j"/><path class="vh35ama0y"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-liechtenstein"} {...others} />);
}

export default Component;
