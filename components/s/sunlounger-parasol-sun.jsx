import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1t-tnykf.css';
import '../../css/j/j88e9se0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="b1t-tnykf"/><path class="j88e9se0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sunlounger-parasol-sun"} {...others} />);
}

export default Component;
