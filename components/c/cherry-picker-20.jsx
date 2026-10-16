import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvfa_-8wt.css';
import '../../css/q/qlwn4rb9s.css';
import '../../css/y/y1kkhac6p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vvfa_-8wt"/><path class="qlwn4rb9s"/><path class="y1kkhac6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cherry-picker-20"} {...others} />);
}

export default Component;
