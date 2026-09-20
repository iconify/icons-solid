import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wws1cbc7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wws1cbc7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speak-ai-line"} {...others} />);
}

export default Component;
