import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/zel9ribid.css';
import '../../css/s/s999b4bfv.css';
import '../../css/g/g56rfmb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="zel9ribid"/><path class="s999b4bfv"/><path class="g56rfmb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-square-bold-duotone"} {...others} />);
}

export default Component;
