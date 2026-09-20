import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/bvgu9pbpm.css';
import '../../css/l/lfq9fzbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="bvgu9pbpm"/><path class="lfq9fzbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:script-prescription"} {...others} />);
}

export default Component;
