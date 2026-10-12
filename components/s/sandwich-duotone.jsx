import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqw04ybjf.css';
import '../../css/p/p9tuqtbsa.css';
import '../../css/o/o_079obux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aqw04ybjf"/><path class="p9tuqtbsa"/><path class="o_079obux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sandwich-duotone"} {...others} />);
}

export default Component;
