import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7juawdew.css';
import '../../css/o/o5q8omqss.css';
import '../../css/l/l72lv6f7j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p7juawdew"/><path class="o5q8omqss"/><path class="l72lv6f7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-search-20"} {...others} />);
}

export default Component;
