import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/ogumcjbmt.css';
import '../../css/k/knzusab6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ogumcjbmt"/><path class="knzusab6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:corner-left-up"} {...others} />);
}

export default Component;
