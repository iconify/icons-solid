import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/imsmkcc2k.css';
import '../../css/a/akdq19r-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="imsmkcc2k"/><path class="akdq19r-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:avocado"} {...others} />);
}

export default Component;
