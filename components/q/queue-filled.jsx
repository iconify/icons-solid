import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg0betbhc.css';
import '../../css/d/ddgckv3ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kg0betbhc"/><rect class="ddgckv3ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:queue-filled"} {...others} />);
}

export default Component;
