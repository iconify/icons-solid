import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phbe2ybqe.css';
import '../../css/q/q7ua3ob8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phbe2ybqe"/><path class="q7ua3ob8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-zip-duotone"} {...others} />);
}

export default Component;
