import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctpa_3nxf.css';
import '../../css/u/u571t7e3d.css';
import '../../css/k/ks-pocc6v.css';
import '../../css/d/dw9t-sbwu.css';
import '../../css/f/f8j6zlb-i.css';
import '../../css/a/a93pcwb-r.css';
import '../../css/m/mgwhs4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctpa_3nxf wm-shadow"/><path class="u571t7e3d wm-k"/><path class="ks-pocc6v wm-k"/><path class="dw9t-sbwu wm-k"/><path class="f8j6zlb-i wm-k"/><path class="a93pcwb-r wm-k"/><path class="mgwhs4bux wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:play"} {...others} />);
}

export default Component;
