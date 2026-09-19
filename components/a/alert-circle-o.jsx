import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyhrs9bfj.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="qyhrs9bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alert-circle-o"} {...others} />);
}

export default Component;
