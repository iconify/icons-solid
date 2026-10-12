import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukp0h0bby.css';
import '../../css/h/h31rlcbji.css';
import '../../css/m/mb3gk9bpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ukp0h0bby"/><path class="h31rlcbji"/><path class="mb3gk9bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:life-buoy-duotone"} {...others} />);
}

export default Component;
