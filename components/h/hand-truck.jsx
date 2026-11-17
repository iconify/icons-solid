import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nfcgacc9w.css';
import '../../css/k/kog31dp3w.css';
import '../../css/o/o9b-osuxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nfcgacc9w"/><path class="kog31dp3w"/><circle class="o9b-osuxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-truck"} {...others} />);
}

export default Component;
