import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smod414ny.css';
import '../../css/o/ol4ckq3wi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smod414ny"/><path class="ol4ckq3wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:log-24"} {...others} />);
}

export default Component;
