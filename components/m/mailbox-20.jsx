import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxp96ub2p.css';
import '../../css/z/zcyb7gkkg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qxp96ub2p"/><path class="zcyb7gkkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mailbox-20"} {...others} />);
}

export default Component;
