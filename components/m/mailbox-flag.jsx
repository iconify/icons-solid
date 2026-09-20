import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewe43jc1h.css';
import '../../css/a/a74_fmb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ewe43jc1h"/><path class="a74_fmb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:mailbox-flag"} {...others} />);
}

export default Component;
