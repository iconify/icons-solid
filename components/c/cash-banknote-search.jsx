import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gdh8_obja.css';
import '../../css/v/vt6t_xb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gdh8_obja"/><path class="vt6t_xb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-search"} {...others} />);
}

export default Component;
