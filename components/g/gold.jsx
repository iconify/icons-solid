import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zyiym8w1u.css';
import '../../css/c/cr0u2ptpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zyiym8w1u"/><path class="cr0u2ptpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gold"} {...others} />);
}

export default Component;
