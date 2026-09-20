import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmi__7-5v.css';
import '../../css/o/o21jc64ou.css';
import '../../css/y/yhktoji6n.css';
import '../../css/r/r6em-vqfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rmi__7-5v"/><ellipse class="o21jc64ou"/><path class="yhktoji6n"/><ellipse class="r6em-vqfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ejs"} {...others} />);
}

export default Component;
