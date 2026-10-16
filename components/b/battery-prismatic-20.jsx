import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6c9yjbgf.css';
import '../../css/p/po1u_tchm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k6c9yjbgf"/><path class="po1u_tchm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-prismatic-20"} {...others} />);
}

export default Component;
