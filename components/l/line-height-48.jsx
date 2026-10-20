import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wka1dhd5q.css';
import '../../css/v/vzdgmebcz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wka1dhd5q"/><path class="vzdgmebcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:line-height-48"} {...others} />);
}

export default Component;
