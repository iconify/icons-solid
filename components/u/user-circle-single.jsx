import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/malduobwn.css';
import '../../css/q/q3o5crbym.css';
import '../../css/g/ghh82xb0k.css';
import '../../css/y/yp1d_0bvl.css';
import '../../css/d/dnusogopk.css';
import '../../css/g/gkxrvhbxk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="malduobwn"/><path class="q3o5crbym"/><path class="ghh82xb0k"/><path class="yp1d_0bvl"/><path class="dnusogopk"/><path class="gkxrvhbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-circle-single"} {...others} />);
}

export default Component;
