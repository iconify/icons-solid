import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvvoesb4o.css';
import '../../css/g/gp3_eseew.css';
import '../../css/u/uh8_dnb8m.css';
import '../../css/m/mjg3zwbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yvvoesb4o"/><path class="gp3_eseew"/><path class="uh8_dnb8m"/><path class="mjg3zwbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:user-chat-dollar"} {...others} />);
}

export default Component;
