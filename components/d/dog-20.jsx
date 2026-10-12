import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2s5ueg_q.css';
import '../../css/v/vm8t9uryo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w2s5ueg_q"/><path class="vm8t9uryo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dog-20"} {...others} />);
}

export default Component;
