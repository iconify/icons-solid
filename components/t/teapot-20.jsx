import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goypvvxbh.css';
import '../../css/j/j7u6kob3r.css';
import '../../css/j/j96filblj.css';
import '../../css/j/jc895qbom.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="goypvvxbh"/><path class="j7u6kob3r"/><path class="j96filblj"/><path class="jc895qbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:teapot-20"} {...others} />);
}

export default Component;
