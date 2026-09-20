import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upwt56ycm.css';
import '../../css/i/iwkfv4boi.css';
import '../../css/d/dt4c_ac6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upwt56ycm"/><path class="iwkfv4boi"/><path class="dt4c_ac6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrange-number"} {...others} />);
}

export default Component;
