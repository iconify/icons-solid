import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xk5arw_ed.css';
import '../../css/u/ubp_1ub4l.css';
import '../../css/m/myq80xbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xk5arw_ed"/><path clip-rule="evenodd" class="ubp_1ub4l"/><path class="myq80xbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-cloud-logo"} {...others} />);
}

export default Component;
