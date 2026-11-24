import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osq_iiixh.css';
import '../../css/m/mibkzifbb.css';
import '../../css/b/b7bwx7byr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="osq_iiixh"/><path class="mibkzifbb"/><path class="b7bwx7byr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carets-from-axis-dashed-vertical-duotone"} {...others} />);
}

export default Component;
