import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/x/xvzz_l1rf.css';
import '../../css/y/ytyd6dv6g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG1GvD9dYf"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="xvzz_l1rf"/><path class="ytyd6dv6g"/></g></mask></defs><circle mask="url(#SVG1GvD9dYf)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:music-note-double-circle-filled"} {...others} />);
}

export default Component;
