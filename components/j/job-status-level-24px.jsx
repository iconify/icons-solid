import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td1t-5bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td1t-5bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:job-status-level-24px"} {...others} />);
}

export default Component;
