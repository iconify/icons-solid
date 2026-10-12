import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di4565bwh.css';
import '../../css/w/w5e9b3z6p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="di4565bwh"/><path class="w5e9b3z6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:monitor-stroke-20"} {...others} />);
}

export default Component;
