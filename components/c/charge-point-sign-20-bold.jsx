import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti01b-i2m.css';
import '../../css/y/yyjf3gxzh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ti01b-i2m"/><path class="yyjf3gxzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-point-sign-20-bold"} {...others} />);
}

export default Component;
