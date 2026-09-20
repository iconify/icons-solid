import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qydxx6b5p.css';
import '../../css/f/fvh-f2b5x.css';
import '../../css/y/ym8xy4bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qydxx6b5p"/><path class="fvh-f2b5x"/><path class="ym8xy4bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cellular-network-wifi-5g"} {...others} />);
}

export default Component;
