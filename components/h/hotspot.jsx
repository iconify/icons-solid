import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/obsscdhly.css';
import '../../css/d/dff5sqbum.css';
import '../../css/e/eibp0ub2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="obsscdhly"/><path class="dff5sqbum"/><path class="eibp0ub2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hotspot"} {...others} />);
}

export default Component;
