import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vu3anyb_w.css';
import '../../css/o/o_0wjsbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vu3anyb_w"/><path class="o_0wjsbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:carrot"} {...others} />);
}

export default Component;
