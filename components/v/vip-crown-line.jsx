import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntcvex3pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntcvex3pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:vip-crown-line"} {...others} />);
}

export default Component;
