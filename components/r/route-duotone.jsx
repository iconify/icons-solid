import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4wggfb6m.css';
import '../../css/x/xtn-lpbad.css';
import '../../css/k/kkc51l8ou.css';
import '../../css/y/y3pbk0kao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4wggfb6m"/><path class="xtn-lpbad"/><path class="kkc51l8ou"/><path class="y3pbk0kao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:route-duotone"} {...others} />);
}

export default Component;
