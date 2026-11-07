import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcsvflbhf.css';
import '../../css/x/xx2uvzv_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vcsvflbhf"/><path class="xx2uvzv_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-bold-duotone"} {...others} />);
}

export default Component;
