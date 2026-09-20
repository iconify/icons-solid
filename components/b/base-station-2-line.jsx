import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj4m-lvhg.css';
import '../../css/a/a0xu55but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj4m-lvhg"/><path class="a0xu55but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:base-station-2-line"} {...others} />);
}

export default Component;
