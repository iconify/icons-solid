import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tn-ia7b_w.css';
import '../../css/z/z2lbj2bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tn-ia7b_w"/><path class="z2lbj2bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-2-two-tone"} {...others} />);
}

export default Component;
