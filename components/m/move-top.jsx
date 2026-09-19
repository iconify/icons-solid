import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/s/syhyksbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle transform="matrix(0 -1 -1 0 15 22)" class="f8yqsxb0s"/><path class="syhyksbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:move-top"} {...others} />);
}

export default Component;
