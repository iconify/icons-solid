import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fhclqv_fm.css';
import '../../css/e/e1ij25anb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fhclqv_fm"/><path class="e1ij25anb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-settings-corner-duocolor-round"} {...others} />);
}

export default Component;
