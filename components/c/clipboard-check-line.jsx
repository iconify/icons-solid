import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aems_ib3p.css';
import '../../css/x/x51-45-ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aems_ib3p"/><path class="x51-45-ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:clipboard-check-line"} {...others} />);
}

export default Component;
