import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b5pkxmbyt.css';
import '../../css/c/c6kbv1b-p.css';
import '../../css/x/xmu98ub3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b5pkxmbyt"/><path class="c6kbv1b-p"/><path class="xmu98ub3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:root-01"} {...others} />);
}

export default Component;
