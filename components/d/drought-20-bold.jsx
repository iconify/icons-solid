import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-qd9mblz.css';
import '../../css/a/askx5vbyu.css';
import '../../css/v/vts463bjl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x-qd9mblz"/><path class="askx5vbyu"/><path class="vts463bjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drought-20-bold"} {...others} />);
}

export default Component;
