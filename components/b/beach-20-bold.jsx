import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2-id1m0v.css';
import '../../css/q/qq_-hzbne.css';
import '../../css/y/yv842m9yr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n2-id1m0v"/><path class="qq_-hzbne"/><path class="yv842m9yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-20-bold"} {...others} />);
}

export default Component;
