import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/katve8b9v.css';
import '../../css/j/j4ymo0bju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="katve8b9v"/><path clip-rule="evenodd" class="j4ymo0bju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:usb-c"} {...others} />);
}

export default Component;
