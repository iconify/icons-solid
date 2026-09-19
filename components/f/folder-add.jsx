import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/gu4fz62bo.css';
import '../../css/k/kowu8rb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="gu4fz62bo"/><path class="kowu8rb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:folder-add"} {...others} />);
}

export default Component;
