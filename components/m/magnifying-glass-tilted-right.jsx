import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edzi-na7o.css';
import '../../css/x/xo75the4k.css';
import '../../css/j/jwu0j98bm.css';
import '../../css/b/by_ciepbf.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/z1jw9p1ae.css';
import '../../css/x/xs1xe8bau.css';
import '../../css/f/fqgg7gozq.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-57.459 43.97 25.476)" class="edzi-na7o"/><path class="xo75the4k"/><path class="jwu0j98bm"/><path class="by_ciepbf"/><g class="ij2x_72vy"><circle transform="rotate(-57.459 43.97 25.476)" class="z1jw9p1ae"/><circle transform="rotate(-57.459 43.97 25.476)" class="xs1xe8bau"/><path class="fqgg7gozq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:magnifying-glass-tilted-right"} {...others} />);
}

export default Component;
