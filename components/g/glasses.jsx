import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/le8o8d4kd.css';
import '../../css/a/auf5qoblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="le8o8d4kd"/><path class="auf5qoblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:glasses"} {...others} />);
}

export default Component;
