import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ge2t0abar.css';
import '../../css/l/li-pl9mqm.css';
import '../../css/p/p1p14xggr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ge2t0abar"/><path class="li-pl9mqm"/><path class="p1p14xggr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flip-flops"} {...others} />);
}

export default Component;
