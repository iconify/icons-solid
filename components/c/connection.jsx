import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvkixbcpd.css';
import '../../css/i/io4621_ab.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lvkixbcpd"/><path class="io4621_ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:connection"} {...others} />);
}

export default Component;
