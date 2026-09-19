import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6vlwn-dd.css';
import '../../css/x/xmq-usnto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6vlwn-dd"/><path class="xmq-usnto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ambulance"} {...others} />);
}

export default Component;
