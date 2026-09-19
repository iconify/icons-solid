import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/b/bjbbfsb0r.css';
import '../../css/l/l-9oxvbho.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="bjbbfsb0r"/><path class="l-9oxvbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pause-circle-twotone"} {...others} />);
}

export default Component;
