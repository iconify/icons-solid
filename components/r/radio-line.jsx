import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryh7p5bve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryh7p5bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:radio-line"} {...others} />);
}

export default Component;
