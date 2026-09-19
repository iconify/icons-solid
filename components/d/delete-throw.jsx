import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-4vkdb5j.css';
import '../../css/f/fhnp4c6xr.css';
import '../../css/e/eojnwibxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j-4vkdb5j"/><path class="fhnp4c6xr"/><path class="eojnwibxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delete-throw"} {...others} />);
}

export default Component;
