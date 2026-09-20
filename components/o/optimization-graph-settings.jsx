import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wvijw_e9n.css';
import '../../css/x/xc-be7hku.css';
import '../../css/e/etmc2gewa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wvijw_e9n"/><path class="xc-be7hku"/><path class="etmc2gewa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:optimization-graph-settings"} {...others} />);
}

export default Component;
