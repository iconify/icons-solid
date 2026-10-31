import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aci9eqc5h.css';
import '../../css/e/eco6wjltv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="aci9eqc5h wm-k"/><path class="eco6wjltv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-pie-gloss"} {...others} />);
}

export default Component;
