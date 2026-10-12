import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5knpcbeg.css';
import '../../css/r/rqr606bgh.css';
import '../../css/t/t3muc1b1j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5knpcbeg"/><path class="rqr606bgh"/><path class="t3muc1b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-cycle-fill-20"} {...others} />);
}

export default Component;
