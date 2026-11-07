import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/t/tfaaafg5o.css';
import '../../css/f/f5bhupbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="tfaaafg5o"/><path class="f5bhupbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-transfer-vertical-bold-duotone"} {...others} />);
}

export default Component;
