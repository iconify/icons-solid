import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyt0gbcxe.css';
import '../../css/f/flf5bgbgb.css';
import '../../css/q/qp_f2rhnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hyt0gbcxe"/><path class="flf5bgbgb"/><path class="qp_f2rhnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-duotone"} {...others} />);
}

export default Component;
