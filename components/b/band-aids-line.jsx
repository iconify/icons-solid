import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2cvx7bcp.css';
import '../../css/u/ug7ux5rvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect transform="rotate(-45 2 8.364)" class="l2cvx7bcp"/><path class="ug7ux5rvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:band-aids-line"} {...others} />);
}

export default Component;
