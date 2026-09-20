import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/binrbta7q.css';
import '../../css/n/nd8dqhb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="binrbta7q"/><path class="nd8dqhb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bitcoin"} {...others} />);
}

export default Component;
