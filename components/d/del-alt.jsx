import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/aayufjbdt.css';
import '../../css/q/q8ub9memq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><ellipse class="aayufjbdt"/><path class="q8ub9memq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:del-alt"} {...others} />);
}

export default Component;
