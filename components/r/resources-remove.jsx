import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jko4vwbbq.css';
import '../../css/o/okg5sbcuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jko4vwbbq"/><path class="okg5sbcuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:resources-remove"} {...others} />);
}

export default Component;
