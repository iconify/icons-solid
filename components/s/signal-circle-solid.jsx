import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycd0-xbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycd0-xbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:signal-circle-solid"} {...others} />);
}

export default Component;
