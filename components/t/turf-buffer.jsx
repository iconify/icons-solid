import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xubdi0bqd.css';
import '../../css/w/wkhlrxb0n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xubdi0bqd"/><path class="wkhlrxb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-buffer"} {...others} />);
}

export default Component;
