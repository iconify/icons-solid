import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pclf19boi.css';
import '../../css/y/yxnkxqeht.css';
import '../../css/y/yfh6-iilh.css';
import '../../css/v/vc7brepqf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pclf19boi"/><path class="yxnkxqeht"/><path class="yfh6-iilh"/><path class="vc7brepqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cyberchef"} {...others} />);
}

export default Component;
