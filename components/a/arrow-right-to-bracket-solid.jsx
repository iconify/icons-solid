import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/ke5x5lbvz.css';
import '../../css/u/uvmng1bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ke5x5lbvz"/><path class="uvmng1bjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-right-to-bracket-solid"} {...others} />);
}

export default Component;
