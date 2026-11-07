import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy_urjqhv.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lkzock2wt.css';
import '../../css/p/p4n3pmbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oy_urjqhv"/><g class="xtpeb-edw"><path class="lkzock2wt"/><path class="p4n3pmbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-bold-duotone"} {...others} />);
}

export default Component;
