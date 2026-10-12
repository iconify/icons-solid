import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5j7aexcp.css';
import '../../css/l/luxc5ghbs.css';
import '../../css/r/rojk_bdub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i5j7aexcp"/><path class="luxc5ghbs"/><path class="rojk_bdub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tag-duotone"} {...others} />);
}

export default Component;
