import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/i/i4ibnvhup.css';
import '../../css/z/z9rgygbob.css';
import '../../css/d/d0-k7hb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><circle class="i4ibnvhup"/><path class="z9rgygbob"/><path class="d0-k7hb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-alt"} {...others} />);
}

export default Component;
