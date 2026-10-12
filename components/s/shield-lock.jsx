import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4d7vmitd.css';
import '../../css/q/qbwmvc_ha.css';
import '../../css/p/p-gs30bll.css';
import '../../css/s/sfwq5_4jw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u4d7vmitd"/><path class="qbwmvc_ha"/><rect class="p-gs30bll"/><path class="sfwq5_4jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-lock"} {...others} />);
}

export default Component;
