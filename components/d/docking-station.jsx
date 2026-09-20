import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yry6u38_x.css';
import '../../css/v/vci34obyc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yry6u38_x"/><path class="vci34obyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docking-station"} {...others} />);
}

export default Component;
