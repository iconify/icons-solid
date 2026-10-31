import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck_7agkxz.css';
import '../../css/l/lmtlhobkp.css';
import '../../css/y/yjlljib5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ck_7agkxz"/><path class="lmtlhobkp"/><path class="yjlljib5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-activity-duotone"} {...others} />);
}

export default Component;
