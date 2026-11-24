import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wd4c-vksa.css';
import '../../css/j/jrp2xebmc.css';
import '../../css/g/gx35_lbkf.css';
import '../../css/p/ph75eacdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wd4c-vksa"/><path class="jrp2xebmc"/><path class="gx35_lbkf"/><path class="ph75eacdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-person-arms-spread-duotone"} {...others} />);
}

export default Component;
