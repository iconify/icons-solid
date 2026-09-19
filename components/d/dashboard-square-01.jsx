import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phqf06_-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phqf06_-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dashboard-square-01"} {...others} />);
}

export default Component;
