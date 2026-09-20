import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc5ipyb4q.css';
import '../../css/r/rrhfdgbdg.css';
import '../../css/s/sgoq9pb5v.css';
import '../../css/l/lu82gsbwe.css';
import '../../css/y/yvbgwdbew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sc5ipyb4q"/><path class="rrhfdgbdg"/><path class="sgoq9pb5v"/><path class="lu82gsbwe"/><path class="yvbgwdbew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wind-east"} {...others} />);
}

export default Component;
