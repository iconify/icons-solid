import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwufu6b3h.css';
import '../../css/t/t0j98pbea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dwufu6b3h"/><path class="t0j98pbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-2-minus-two-tone"} {...others} />);
}

export default Component;
