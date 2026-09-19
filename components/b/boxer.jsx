import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lsdx72hdd.css';
import '../../css/p/po7_ugb8x.css';
import '../../css/e/ehvyd8b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lsdx72hdd"/><path class="po7_ugb8x"/><path class="ehvyd8b2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:boxer"} {...others} />);
}

export default Component;
