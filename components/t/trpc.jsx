import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqp6v8l5a.css';
import '../../css/z/zehpl8bdy.css';
import '../../css/l/llganab6s.css';
import '../../css/z/zyt9kcsds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqp6v8l5a"/><path class="zehpl8bdy"/><path class="llganab6s"/><path class="zyt9kcsds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:trpc"} {...others} />);
}

export default Component;
