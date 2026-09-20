import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mix8npf6e.css';
import '../../css/d/d5g-wkb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="mix8npf6e"/><path class="d5g-wkb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:biohazard"} {...others} />);
}

export default Component;
