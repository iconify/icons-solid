import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gfci7tbsc.css';
import '../../css/x/xeto-3bnn.css';
import '../../css/x/x1nz57bux.css';
import '../../css/e/exqd6i1-h.css';
import '../../css/n/n9rpzpfcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gfci7tbsc wm-shadow"/><path class="xeto-3bnn"/><path class="x1nz57bux"/><path class="exqd6i1-h"/><path class="n9rpzpfcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-sun"} {...others} />);
}

export default Component;
