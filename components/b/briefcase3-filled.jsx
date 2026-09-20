import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plru9gbxl.css';
import '../../css/o/o74pufqtt.css';
import '../../css/t/t8xme76ku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="plru9gbxl"/><path class="o74pufqtt"/><path class="t8xme76ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:briefcase3-filled"} {...others} />);
}

export default Component;
