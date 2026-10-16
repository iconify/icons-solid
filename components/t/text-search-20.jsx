import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmqzfdcfq.css';
import '../../css/m/mq74mlbqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cmqzfdcfq"/><path class="mq74mlbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-search-20"} {...others} />);
}

export default Component;
