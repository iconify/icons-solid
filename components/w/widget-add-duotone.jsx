import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6ba2bga.css';
import '../../css/t/t-5vfcbmo.css';
import '../../css/i/ihsle8fcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mt6ba2bga"/><path class="t-5vfcbmo"/><path class="ihsle8fcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:widget-add-duotone"} {...others} />);
}

export default Component;
