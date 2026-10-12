import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txxqghbst.css';
import '../../css/u/uut0azzwr.css';
import '../../css/m/mv033bbta.css';
import '../../css/d/d2_ueooqs.css';
import '../../css/f/fe81k0bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="txxqghbst"/><path class="uut0azzwr"/><path class="mv033bbta"/><path class="d2_ueooqs"/><path class="fe81k0bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-play-duotone"} {...others} />);
}

export default Component;
