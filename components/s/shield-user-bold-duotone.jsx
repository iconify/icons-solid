import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoqk-f2dc.css';
import '../../css/q/qrgtcq9tj.css';
import '../../css/x/xu08aye4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoqk-f2dc"/><path class="qrgtcq9tj"/><path class="xu08aye4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-user-bold-duotone"} {...others} />);
}

export default Component;
