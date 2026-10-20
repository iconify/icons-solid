import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kak5-8b1v.css';
import '../../css/y/ylye7u88m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kak5-8b1v"/><path class="ylye7u88m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:line-height-20"} {...others} />);
}

export default Component;
