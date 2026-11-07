import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt4erfbgl.css';
import '../../css/d/dqvo1yxlg.css';
import '../../css/c/ccsmm3hcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt4erfbgl"/><path class="dqvo1yxlg"/><path class="ccsmm3hcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-transfer-vertical-bold-duotone"} {...others} />);
}

export default Component;
