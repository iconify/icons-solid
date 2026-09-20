import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnayhz3pu.css';
import '../../css/l/l5f9elzdh.css';
import '../../css/j/j_5sfhbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fnayhz3pu"/><path class="l5f9elzdh"/><path class="j_5sfhbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-line-duotone"} {...others} />);
}

export default Component;
