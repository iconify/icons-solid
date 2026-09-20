import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y8_o4fbpu.css';
import '../../css/u/uu44kpqap.css';
import '../../css/y/yox2jrpnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y8_o4fbpu"/><path class="uu44kpqap"/><path class="yox2jrpnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:ui-page-scroll"} {...others} />);
}

export default Component;
