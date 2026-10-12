import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb61mufe.css';
import '../../css/m/mw0vf3ypc.css';
import '../../css/s/sy65ttwvt.css';
import '../../css/k/k6vifjbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oeb61mufe"/><path class="mw0vf3ypc"/><path class="sy65ttwvt"/><path class="k6vifjbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rewind-duotone"} {...others} />);
}

export default Component;
