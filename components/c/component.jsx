import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/son4tudce.css';
import '../../css/f/f5e_mcc5s.css';
import '../../css/u/u2nfjkp5n.css';
import '../../css/u/udm27nbrn.css';
import '../../css/d/dm_ibof1l.css';
import '../../css/z/zeze0vgcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="son4tudce wm-shadow"/><path class="f5e_mcc5s wm-shadow"/><path class="u2nfjkp5n"/><path class="udm27nbrn"/><path class="dm_ibof1l"/><path class="zeze0vgcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:component"} {...others} />);
}

export default Component;
