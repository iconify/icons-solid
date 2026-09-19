import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzcw9_93q.css';
import '../../css/g/g5jsjs0du.css';
import '../../css/n/n2aw37isc.css';
import '../../css/f/fpcwq9bdh.css';
import '../../css/m/mva_4dbqe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dzcw9_93q"/><path class="g5jsjs0du"/><path class="n2aw37isc"/><ellipse transform="rotate(45.156 17.128 15.082)" class="fpcwq9bdh"/><path clip-rule="evenodd" class="mva_4dbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:broken-chain"} {...others} />);
}

export default Component;
