import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qpd-0ubsd.css';
import '../../css/u/u0pjq9c3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="qpd-0ubsd"/><path class="u0pjq9c3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:sort-solid"} {...others} />);
}

export default Component;
