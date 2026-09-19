import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e842h2b0v.css';
import '../../css/f/fwi1i6brr.css';
import '../../css/u/uukfrxkmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e842h2b0v"/><path class="fwi1i6brr"/><path class="uukfrxkmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-circle-03"} {...others} />);
}

export default Component;
