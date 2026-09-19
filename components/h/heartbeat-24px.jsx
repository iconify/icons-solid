import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxz5aqj2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxz5aqj2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heartbeat-24px"} {...others} />);
}

export default Component;
