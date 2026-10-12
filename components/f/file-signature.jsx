import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/b/b1hz9obnp.css';
import '../../css/k/kt6q7bbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="b1hz9obnp"/><path class="kt6q7bbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-signature"} {...others} />);
}

export default Component;
