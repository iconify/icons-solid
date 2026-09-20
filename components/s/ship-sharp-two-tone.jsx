import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y5rhuefdb.css';
import '../../css/y/yvw1a2brr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="y5rhuefdb"/><path class="yvw1a2brr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ship-sharp-two-tone"} {...others} />);
}

export default Component;
