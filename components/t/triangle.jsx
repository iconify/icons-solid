import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhomj3b2y.css';
import '../../css/e/e80p1vb8l.css';
import '../../css/y/yfkwu4bgz.css';
import '../../css/w/w2q9-jbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fhomj3b2y wm-k"/><path class="e80p1vb8l wm-k"/><path class="wm-k yfkwu4bgz"/><path class="w2q9-jbxn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:triangle"} {...others} />);
}

export default Component;
