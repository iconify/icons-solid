import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk2_9yd1v.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/pf6mklbqq.css';
import '../../css/t/ta8vbjbhp.css';
import '../../css/d/d0hm0kmuv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vk2_9yd1v"/><g class="brzn_0bpr"><path class="pf6mklbqq"/><path class="ta8vbjbhp"/><path class="d0hm0kmuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:thumbs-up"} {...others} />);
}

export default Component;
