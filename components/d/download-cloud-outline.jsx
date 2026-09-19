import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glvsanvuf.css';
import '../../css/y/yv713vosb.css';
import '../../css/y/yb0-hsb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="download-cloud-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="glvsanvuf"/><path class="yv713vosb"/><path class="yb0-hsb_x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:download-cloud-outline"} {...others} />);
}

export default Component;
