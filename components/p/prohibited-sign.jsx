import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crsw-fb_d.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/y9f5wvx3z.css';
import '../../css/k/ksr_5bbwe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="crsw-fb_d"/><g class="jn8qy4bru"><path class="y9f5wvx3z"/><path class="ksr_5bbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:prohibited-sign"} {...others} />);
}

export default Component;
