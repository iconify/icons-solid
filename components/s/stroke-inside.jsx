import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7sbyu5vo.css';
import '../../css/w/w1i21jr4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f7sbyu5vo"/><path class="w1i21jr4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stroke-inside"} {...others} />);
}

export default Component;
