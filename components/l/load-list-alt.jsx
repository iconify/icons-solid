import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/h3dnxabdk.css';
import '../../css/g/gy57zebbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="h3dnxabdk"/><path class="gy57zebbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:load-list-alt"} {...others} />);
}

export default Component;
