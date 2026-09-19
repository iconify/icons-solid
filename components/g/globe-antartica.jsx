import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yev1t9yns.css';
import '../../css/z/zv4wep4nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yev1t9yns"/><path class="zv4wep4nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-antartica"} {...others} />);
}

export default Component;
