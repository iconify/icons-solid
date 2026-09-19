import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jk_ysda0a.css';
import '../../css/w/wfd123b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jk_ysda0a"/><path class="wfd123b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hold-locked-01"} {...others} />);
}

export default Component;
