import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw4sn7b4o.css';
import '../../css/d/d-drzdbxc.css';
import '../../css/n/n_e6y6-0x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cw4sn7b4o"/><path class="d-drzdbxc"/><path class="n_e6y6-0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:front-camera"} {...others} />);
}

export default Component;
