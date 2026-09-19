import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmuf08bcd.css';
import '../../css/e/e4y_14_tb.css';
import '../../css/i/iroxo5bfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bmuf08bcd"/><path clip-rule="evenodd" class="e4y_14_tb"/><path class="iroxo5bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:emergency-siren"} {...others} />);
}

export default Component;
