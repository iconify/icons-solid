import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpm9sb8kj.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="mpm9sb8kj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:ellipsis"} {...others} />);
}

export default Component;
