import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g4kwiwxcl.css';
import '../../css/k/k63u14qcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g4kwiwxcl"/><path class="k63u14qcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-rumble"} {...others} />);
}

export default Component;
