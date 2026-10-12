import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wi2wsor9s.css';
import '../../css/c/cfupnld-v.css';
import '../../css/w/wde-mrlcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wi2wsor9s"/><path class="cfupnld-v"/><path class="wde-mrlcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-dot-duotone"} {...others} />);
}

export default Component;
