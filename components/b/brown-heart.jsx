import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efmnw6soo.css';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kuim36bpx.css';
import '../../css/g/gvkoecj5g.css';
import '../../css/h/hdlyltpxd.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGDGP37bmp" width="28" height="25" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="efmnw6soo"/></mask><g class="to-5kdesz"><path class="kuim36bpx"/><g mask="url(#SVGDGP37bmp)" class="gvkoecj5g"><path class="hdlyltpxd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:brown-heart"} {...others} />);
}

export default Component;
