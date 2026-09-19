import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6y8wvbql.css';
import '../../css/c/coq_nrb9p.css';
import '../../css/i/ifa6tqr9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l6y8wvbql"/><path class="coq_nrb9p"/><path class="ifa6tqr9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tree-01"} {...others} />);
}

export default Component;
