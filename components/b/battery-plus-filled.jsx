import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz3zj39wl.css';
import '../../css/m/m-jnejbbp.css';
import '../../css/f/fdgucpbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dz3zj39wl"/><path clip-rule="evenodd" class="m-jnejbbp"/><path class="fdgucpbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:battery-plus-filled"} {...others} />);
}

export default Component;
