import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqk3hhf6z.css';

const viewBox = {"width":472,"height":432};
const content = `<path class="rqk3hhf6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:desktop-windows"} {...others} />);
}

export default Component;
