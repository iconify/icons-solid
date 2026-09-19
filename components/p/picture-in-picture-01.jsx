import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w60dvzbin.css';
import '../../css/v/vn6b17lwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w60dvzbin"/><path class="vn6b17lwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:picture-in-picture-01"} {...others} />);
}

export default Component;
