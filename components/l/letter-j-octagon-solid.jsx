import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu-8o6bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu-8o6bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-j-octagon-solid"} {...others} />);
}

export default Component;
