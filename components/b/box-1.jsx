import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq8v75mof.css';
import '../../css/d/dc43lbrvg.css';
import '../../css/o/odjqqzb2u.css';
import '../../css/w/wwl35ac3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gq8v75mof"/><path class="dc43lbrvg"/><path class="odjqqzb2u"/><path class="wwl35ac3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:box-1"} {...others} />);
}

export default Component;
