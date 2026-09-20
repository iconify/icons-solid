import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y95t8mryw.css';
import '../../css/v/vr3o4bbfg.css';
import '../../css/l/lg0q5_b5p.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y95t8mryw"/><path class="vr3o4bbfg"/><path class="lg0q5_b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:beach-flat"} {...others} />);
}

export default Component;
