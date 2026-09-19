import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/okpem58dw.css';
import '../../css/v/vmew9sbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="okpem58dw"/><path class="vmew9sbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:redo-solid"} {...others} />);
}

export default Component;
