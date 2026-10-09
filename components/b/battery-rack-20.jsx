import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mocog6boj.css';
import '../../css/h/ho9y8vbhq.css';
import '../../css/v/vi_8ex1lt.css';
import '../../css/a/alhk8c02y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mocog6boj"/><path class="ho9y8vbhq"/><path class="vi_8ex1lt"/><path class="alhk8c02y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-rack-20"} {...others} />);
}

export default Component;
