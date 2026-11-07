import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/w/wyg5aebcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path class="wyg5aebcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
