import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhsl0kbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhsl0kbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chevron-right-square"} {...others} />);
}

export default Component;
