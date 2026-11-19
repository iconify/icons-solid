import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-_-_kbvf.css';
import '../../css/c/cvlja07mu.css';
import '../../css/l/l-qb1ac7n.css';
import '../../css/v/ves06kicb.css';
import '../../css/d/d56vptb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e-_-_kbvf"/><path class="cvlja07mu"/><path class="l-qb1ac7n"/><path class="ves06kicb"/><path class="d56vptb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:briefcase-forklift"} {...others} />);
}

export default Component;
