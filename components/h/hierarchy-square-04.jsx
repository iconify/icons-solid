import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ehh2s2b3d.css';
import '../../css/m/mrjuy2kcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ehh2s2b3d"/><path class="mrjuy2kcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-04"} {...others} />);
}

export default Component;
