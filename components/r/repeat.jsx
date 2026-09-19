import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/paar76b2v.css';
import '../../css/l/lnnf6-b_c.css';
import '../../css/q/qu5ga3b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="paar76b2v"/><path class="lnnf6-b_c"/><path class="qu5ga3b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:repeat"} {...others} />);
}

export default Component;
