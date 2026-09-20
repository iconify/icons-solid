import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5d600b3o.css';
import '../../css/e/ehiy4lb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r5d600b3o"/><path class="ehiy4lb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dna-2"} {...others} />);
}

export default Component;
