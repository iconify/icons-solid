import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/o/otit0l4ks.css';
import '../../css/q/qoxu7fbss.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><circle class="otit0l4ks"/><path class="qoxu7fbss"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:slightly-smiling-face"} {...others} />);
}

export default Component;
