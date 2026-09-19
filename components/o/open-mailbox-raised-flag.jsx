import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns3mynbwd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ns3mynbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:open-mailbox-raised-flag"} {...others} />);
}

export default Component;
