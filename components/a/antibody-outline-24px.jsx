import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a82rnzv4e.css';
import '../../css/n/nnyns4qoe.css';
import '../../css/e/e1njv-b-x.css';
import '../../css/c/cmk8cnb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a82rnzv4e"/><path class="nnyns4qoe"/><path clip-rule="evenodd" class="e1njv-b-x"/><path class="cmk8cnb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:antibody-outline-24px"} {...others} />);
}

export default Component;
