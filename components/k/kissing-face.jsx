import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/u/u5g-e0pir.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/k/k4z7zsbhp.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><path class="u5g-e0pir"/><path class="tdhzq11dq"/><circle class="k4z7zsbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kissing-face"} {...others} />);
}

export default Component;
