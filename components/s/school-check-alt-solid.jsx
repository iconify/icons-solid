import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7t0vhbyz.css';
import '../../css/x/xnx6lwbqt.css';
import '../../css/x/xy6-dl1rb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z7t0vhbyz"/><path class="xnx6lwbqt"/><path class="xy6-dl1rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-check-alt-solid"} {...others} />);
}

export default Component;
