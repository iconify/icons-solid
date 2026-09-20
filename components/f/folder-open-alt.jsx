import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/klx24wbje.css';
import '../../css/g/g004l4kyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="klx24wbje"/><path class="g004l4kyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-open-alt"} {...others} />);
}

export default Component;
