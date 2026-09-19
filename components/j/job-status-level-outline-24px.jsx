import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vka6x62mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vka6x62mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:job-status-level-outline-24px"} {...others} />);
}

export default Component;
