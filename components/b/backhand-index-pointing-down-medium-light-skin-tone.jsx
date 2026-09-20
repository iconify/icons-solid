import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4c7wqquu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/l9wgslc9t.css';
import '../../css/z/zp34hmbbm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s4c7wqquu"/><g class="ij2x_72vy"><path class="l9wgslc9t"/><path class="zp34hmbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backhand-index-pointing-down-medium-light-skin-tone"} {...others} />);
}

export default Component;
