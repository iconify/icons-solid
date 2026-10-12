import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ok1a9w9na.css';
import '../../css/f/fzomxmbxj.css';
import '../../css/d/d5v1rib0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ok1a9w9na"/><path class="fzomxmbxj"/><path class="d5v1rib0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-cv"} {...others} />);
}

export default Component;
