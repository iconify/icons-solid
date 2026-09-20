import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngvjkbc_x.css';
import '../../css/m/mnisp1zer.css';
import '../../css/n/ne4u07bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ngvjkbc_x"/><path clip-rule="evenodd" class="mnisp1zer"/><path class="ne4u07bdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:run3-duotone"} {...others} />);
}

export default Component;
