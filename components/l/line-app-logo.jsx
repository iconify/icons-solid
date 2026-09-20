import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qb_0hfsdi.css';
import '../../css/l/ll6ndbpin.css';
import '../../css/e/e_wke_b3i.css';
import '../../css/w/w66qdzbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qb_0hfsdi"/><path class="ll6ndbpin"/><path class="e_wke_b3i"/><path class="w66qdzbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:line-app-logo"} {...others} />);
}

export default Component;
