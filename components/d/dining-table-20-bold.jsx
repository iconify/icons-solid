import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga3wfsbxu.css';
import '../../css/e/evnvwebdx.css';
import '../../css/p/phqadmx9n.css';
import '../../css/e/ewqgmpbxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ga3wfsbxu"/><path class="evnvwebdx"/><path class="phqadmx9n"/><path class="ewqgmpbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-table-20-bold"} {...others} />);
}

export default Component;
