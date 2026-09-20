import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p11m9zbrl.css';
import '../../css/j/jllxgobne.css';
import '../../css/w/wcuvlk0rr.css';
import '../../css/y/ykbnwb91e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p11m9zbrl"/><path class="jllxgobne"/><path class="wcuvlk0rr"/><path class="ykbnwb91e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:telecommunicator"} {...others} />);
}

export default Component;
