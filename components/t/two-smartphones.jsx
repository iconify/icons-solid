import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekzeb4jic.css';
import '../../css/b/by174fbnq.css';
import '../../css/u/uvfv-il9k.css';
import '../../css/n/n-b0hwo6i.css';
import '../../css/f/f_ab0acev.css';
import '../../css/n/nffkeux5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ekzeb4jic"/><path class="by174fbnq"/><path class="uvfv-il9k"/><path class="n-b0hwo6i"/><path class="f_ab0acev"/><circle class="nffkeux5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:two-smartphones"} {...others} />);
}

export default Component;
