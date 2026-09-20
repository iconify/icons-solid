import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_d602kex.css';
import '../../css/u/u-v0-d6uk.css';
import '../../css/q/qpp9bw75i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p_d602kex"/><path class="u-v0-d6uk"/><path class="qpp9bw75i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rclone"} {...others} />);
}

export default Component;
