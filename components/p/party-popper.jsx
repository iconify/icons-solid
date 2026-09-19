import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j5ryysb0v.css';
import '../../css/w/wccisyhhx.css';
import '../../css/g/gupjygfja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j5ryysb0v"/><path class="wccisyhhx"/><path class="gupjygfja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:party-popper"} {...others} />);
}

export default Component;
