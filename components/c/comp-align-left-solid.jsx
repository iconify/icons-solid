import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xhsh3ub0g.css';
import '../../css/n/n2r4_-b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xhsh3ub0g"/><path class="n2r4_-b3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:comp-align-left-solid"} {...others} />);
}

export default Component;
