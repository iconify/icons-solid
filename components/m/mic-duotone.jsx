import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpr28qpqr.css';
import '../../css/h/hrmastb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mpr28qpqr"/><path class="hrmastb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mic-duotone"} {...others} />);
}

export default Component;
