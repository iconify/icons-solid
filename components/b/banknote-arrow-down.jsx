import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ip1_tck2k.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ip1_tck2k"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:banknote-arrow-down"} {...others} />);
}

export default Component;
