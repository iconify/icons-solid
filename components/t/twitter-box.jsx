import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_uvm7bnh.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="a_uvm7bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:twitter-box"} {...others} />);
}

export default Component;
