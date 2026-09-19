import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/kjw-vg5wy.css';
import '../../css/z/zk9l5j53a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="kjw-vg5wy"/><path class="zk9l5j53a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-up-down-solid"} {...others} />);
}

export default Component;
