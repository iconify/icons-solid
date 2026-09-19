import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ropt4jr0p.css';
import '../../css/y/ygxy_c58d.css';
import '../../css/b/byu0ligoo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ropt4jr0p"/><path class="ygxy_c58d"/><path class="byu0ligoo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:subnode-add"} {...others} />);
}

export default Component;
