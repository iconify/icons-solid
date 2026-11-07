import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0jc9qlwi.css';
import '../../css/q/qsm1dmd4a.css';
import '../../css/z/z04quez4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0jc9qlwi"/><path class="qsm1dmd4a"/><path class="z04quez4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-warning-bold-duotone"} {...others} />);
}

export default Component;
