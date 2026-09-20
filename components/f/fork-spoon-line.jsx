import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-7b-6vtj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-7b-6vtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fork-spoon-line"} {...others} />);
}

export default Component;
