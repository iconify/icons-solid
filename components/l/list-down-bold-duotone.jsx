import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ophijtbsv.css';
import '../../css/q/qg1_u7bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ophijtbsv"/><path class="qg1_u7bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-down-bold-duotone"} {...others} />);
}

export default Component;
