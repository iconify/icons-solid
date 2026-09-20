import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eyrtj4wgt.css';
import '../../css/f/f_1b_5fjb.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/o/o41814ltx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eyrtj4wgt"/><path class="f_1b_5fjb"/><path class="ml0cb1b5h"/><path class="o41814ltx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-broken"} {...others} />);
}

export default Component;
