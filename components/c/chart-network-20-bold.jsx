import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd6_1xb5y.css';
import '../../css/x/xo32v0bez.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dd6_1xb5y"/><path class="xo32v0bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-network-20-bold"} {...others} />);
}

export default Component;
