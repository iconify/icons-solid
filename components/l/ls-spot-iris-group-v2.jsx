import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns3l64bag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ns3l64bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ls-spot-iris-group-v2"} {...others} />);
}

export default Component;
