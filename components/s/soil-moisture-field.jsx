import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q9bp_qb7g.css';
import '../../css/c/czut7sbsn.css';
import '../../css/w/wu6n2nbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q9bp_qb7g"/><path class="czut7sbsn"/><path class="wu6n2nbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soil-moisture-field"} {...others} />);
}

export default Component;
