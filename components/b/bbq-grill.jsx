import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdwrcuibi.css';
import '../../css/r/rpt9-pb5g.css';
import '../../css/c/c7nozwbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pdwrcuibi"/><path class="rpt9-pb5g"/><path class="c7nozwbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bbq-grill"} {...others} />);
}

export default Component;
