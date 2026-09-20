import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cnlu5zbty.css';
import '../../css/o/odesvlbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cnlu5zbty"/><circle class="odesvlbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clef-bass"} {...others} />);
}

export default Component;
