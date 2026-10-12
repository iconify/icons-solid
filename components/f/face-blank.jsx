import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w55oivbfr.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/g/g4u2w0w3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="w55oivbfr"/><circle transform="rotate(90 12 12)" class="ze92cpb2t"/><path class="g4u2w0w3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-blank"} {...others} />);
}

export default Component;
