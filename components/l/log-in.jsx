import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8ju1ahng.css';
import '../../css/g/gr8rvhted.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n8ju1ahng"/><path class="gr8rvhted"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:log-in"} {...others} />);
}

export default Component;
