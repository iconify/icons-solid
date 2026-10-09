import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az1dy05bx.css';
import '../../css/x/xh-xqdv8t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="az1dy05bx"/><path class="xh-xqdv8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-left-20-bold"} {...others} />);
}

export default Component;
