import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhnx-jb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhnx-jb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:letter-spacing"} {...others} />);
}

export default Component;
