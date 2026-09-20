import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ee0xus2am.css';
import '../../css/k/k3jbaw_4p.css';
import '../../css/h/hmg62ybyv.css';
import '../../css/v/ve1npkyfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ee0xus2am"/><path class="k3jbaw_4p"/><path class="hmg62ybyv"/><path class="ve1npkyfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-sad-bold-duotone"} {...others} />);
}

export default Component;
