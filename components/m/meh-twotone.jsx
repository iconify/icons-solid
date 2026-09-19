import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/k/khisuj0sc.css';
import '../../css/r/rcv0srbxs.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="khisuj0sc"/><path class="rcv0srbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:meh-twotone"} {...others} />);
}

export default Component;
