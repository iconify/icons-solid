import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tejlm40fe.css';
import '../../css/z/zn6qlpiwp.css';
import '../../css/j/jc8hfjbqp.css';

const viewBox = {"width":640,"height":480};
const content = `<g transform="scale(.64143 .96773)" class="nv9qcacyl"><rect transform="scale(.93865 .69686)" class="tejlm40fe"/><rect transform="scale(.93865 .69686)" class="zn6qlpiwp"/><path class="jc8hfjbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lt-4x3"} {...others} />);
}

export default Component;
