import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vz07rfb4o.css';
import '../../css/f/fnitv3b8i.css';
import '../../css/x/xh1kfyb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vz07rfb4o"/><path class="fnitv3b8i"/><path class="xh1kfyb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:drawer-envelope"} {...others} />);
}

export default Component;
