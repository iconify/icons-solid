import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8-77cbpa.css';
import '../../css/h/huuajhmrh.css';
import '../../css/n/nqkcrrb7x.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q8-77cbpa"/><circle class="huuajhmrh"/><path class="nqkcrrb7x"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:worried-face"} {...others} />);
}

export default Component;
