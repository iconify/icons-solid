import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y67ukkb7b.css';
import '../../css/h/hsp5ry7sn.css';
import '../../css/h/hguip8b7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y67ukkb7b"/><path clip-rule="evenodd" class="hsp5ry7sn"/><path clip-rule="evenodd" class="hguip8b7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-face-male-flat"} {...others} />);
}

export default Component;
