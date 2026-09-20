import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_cr2obrq.css';
import '../../css/x/xh69ljbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h_cr2obrq"/><path class="xh69ljbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-right-duotone"} {...others} />);
}

export default Component;
