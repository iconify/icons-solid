import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d-jd-neki.css';
import '../../css/k/k2ubz8ubn.css';
import '../../css/g/gd39rbc8r.css';
import '../../css/d/d2r1bhs8v.css';
import '../../css/j/j80k7lh5i.css';
import '../../css/n/nwan8jbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d-jd-neki wm-deco"/><path class="k2ubz8ubn wm-deco"/><path class="gd39rbc8r wm-k"/><path class="d2r1bhs8v wm-a"/><path class="j80k7lh5i wm-k"/><path class="nwan8jbfn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-up-blueprint"} {...others} />);
}

export default Component;
