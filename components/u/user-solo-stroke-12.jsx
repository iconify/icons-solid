import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wg4wfrbba.css';
import '../../css/c/c_8zr8hod.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="wg4wfrbba"/><path class="c_8zr8hod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-solo-stroke-12"} {...others} />);
}

export default Component;
