import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whwpro6ey.css';
import '../../css/f/fyssiwbsm.css';
import '../../css/o/olzrecbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="whwpro6ey"/><path class="fyssiwbsm"/><path class="olzrecbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:key-square-duotone"} {...others} />);
}

export default Component;
