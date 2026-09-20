import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/v/v072edbiz.css';
import '../../css/i/i1yxb9_jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="v072edbiz"/><path class="i1yxb9_jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:thumb-up"} {...others} />);
}

export default Component;
