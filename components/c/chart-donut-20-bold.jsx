import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa6-c2yag.css';
import '../../css/i/ihj-8acvw.css';
import '../../css/b/bdln6g71h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aa6-c2yag"/><path class="ihj-8acvw"/><path class="bdln6g71h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-donut-20-bold"} {...others} />);
}

export default Component;
