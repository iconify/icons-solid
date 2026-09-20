import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uetekk69h.css';
import '../../css/t/tl9uo1t8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uetekk69h"/><path class="tl9uo1t8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:train-front"} {...others} />);
}

export default Component;
