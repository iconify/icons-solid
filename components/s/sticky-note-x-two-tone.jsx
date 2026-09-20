import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lt_vvx88h.css';
import '../../css/t/tp_q3-brs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lt_vvx88h"/><path class="tp_q3-brs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-x-two-tone"} {...others} />);
}

export default Component;
