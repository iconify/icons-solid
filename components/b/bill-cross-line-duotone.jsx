import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8z3hqtgg.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/u/uiwsg29tk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t8z3hqtgg"/><path class="tnf8gbb-i"/><path class="uiwsg29tk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-cross-line-duotone"} {...others} />);
}

export default Component;
