import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3b74gbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3b74gbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-left-waves-solid"} {...others} />);
}

export default Component;
