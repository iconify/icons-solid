import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hhwr3x3gm.css';
import '../../css/g/g4-7lj-qx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="hhwr3x3gm"/><path class="g4-7lj-qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-up-solid"} {...others} />);
}

export default Component;
