import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9u_gs11p.css';
import '../../css/o/olnbu5b2u.css';
import '../../css/e/ee660cc_n.css';
import '../../css/y/y147fwufd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w9u_gs11p"/><path class="olnbu5b2u"/><path class="ee660cc_n"/><path class="y147fwufd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sun-duo"} {...others} />);
}

export default Component;
