import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm-v76dnd.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="sm-v76dnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:crop-3-2"} {...others} />);
}

export default Component;
