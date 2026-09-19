import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d68_lj7pt.css';
import '../../css/t/tdxgf7blr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="d68_lj7pt"/><path class="tdxgf7blr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dgd"} {...others} />);
}

export default Component;
