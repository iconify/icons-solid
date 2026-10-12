import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr03i9bpd.css';
import '../../css/g/gnm1a_rpe.css';
import '../../css/l/l2t523w3d.css';
import '../../css/n/nxs63bcjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lr03i9bpd"/><path class="gnm1a_rpe"/><path class="l2t523w3d"/><path class="nxs63bcjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bbq-grill"} {...others} />);
}

export default Component;
