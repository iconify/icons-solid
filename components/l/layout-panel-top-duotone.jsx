import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0e-p7rcz.css';
import '../../css/r/rz9xmyb3y.css';
import '../../css/k/km55dfbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k0e-p7rcz"/><path class="rz9xmyb3y"/><path class="km55dfbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-panel-top-duotone"} {...others} />);
}

export default Component;
