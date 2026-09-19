import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-j7aeb6e.css';
import '../../css/o/oy2n5ob-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-j7aeb6e"/><path class="oy2n5ob-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cloud-computing"} {...others} />);
}

export default Component;
