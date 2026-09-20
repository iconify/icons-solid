import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytvh39s1u.css';
import '../../css/y/ywk57vfom.css';
import '../../css/p/py2rm2fdy.css';
import '../../css/u/u5l_fgbtf.css';

const viewBox = {"width":258,"height":199};
const content = `<g class="ytvh39s1u"><path clip-rule="evenodd" class="ywk57vfom"/><path class="py2rm2fdy"/><path clip-rule="evenodd" class="u5l_fgbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:t3-stack-dark"} {...others} />);
}

export default Component;
