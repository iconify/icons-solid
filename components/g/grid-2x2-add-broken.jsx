import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/m/mm6j7bb6p.css';
import '../../css/n/noodpccbe.css';
import '../../css/y/y2cuq6b_i.css';
import '../../css/c/c8yuot4zz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="mm6j7bb6p"/><path class="noodpccbe"/><path class="y2cuq6b_i"/><path class="c8yuot4zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-add-broken"} {...others} />);
}

export default Component;
