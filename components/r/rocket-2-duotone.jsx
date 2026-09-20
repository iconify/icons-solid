import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/huuvwbb5k.css';
import '../../css/r/rjbio2i6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="huuvwbb5k"/><path class="rjbio2i6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rocket-2-duotone"} {...others} />);
}

export default Component;
