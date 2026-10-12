import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txva6ic1h.css';
import '../../css/m/mgl97wcfv.css';
import '../../css/s/s805e4aqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="txva6ic1h"/><path class="mgl97wcfv"/><path class="s805e4aqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:closed-caption-duotone"} {...others} />);
}

export default Component;
