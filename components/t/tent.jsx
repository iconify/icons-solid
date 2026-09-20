import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/v/vax4-mb8q.css';
import '../../css/v/vpdye7a_h.css';
import '../../css/b/b2msjh0_j.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/l47fmvglq.css';
import '../../css/j/j__iw4bub.css';
import '../../css/l/lebkfcbfm.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="vax4-mb8q"/><path class="vpdye7a_h"/><path class="b2msjh0_j"/></g><g class="ij2x_72vy"><path class="l47fmvglq"/><path class="j__iw4bub"/><path class="lebkfcbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tent"} {...others} />);
}

export default Component;
