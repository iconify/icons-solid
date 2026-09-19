import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv5f_v8gl.css';
import '../../css/m/mpb976b_h.css';
import '../../css/m/mbjqfdc5s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pv5f_v8gl"/><path class="mpb976b_h"/><path class="mbjqfdc5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:template"} {...others} />);
}

export default Component;
