import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysujvx2kd.css';
import '../../css/q/qtfjj6b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ysujvx2kd"/><path class="qtfjj6b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-square-bold-duotone"} {...others} />);
}

export default Component;
