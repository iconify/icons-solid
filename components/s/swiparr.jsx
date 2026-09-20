import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl6gyl07q.css';
import '../../css/h/hxv6wjbvr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yl6gyl07q"/><path class="hxv6wjbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swiparr"} {...others} />);
}

export default Component;
