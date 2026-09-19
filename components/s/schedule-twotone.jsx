import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y79ngbc7v.css';
import '../../css/q/qxas1dhwz.css';
import '../../css/c/ckhj8wq2j.css';
import '../../css/u/ub88o8b7e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="y79ngbc7v"/><path class="qxas1dhwz"/><path class="ckhj8wq2j"/><path class="ub88o8b7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:schedule-twotone"} {...others} />);
}

export default Component;
