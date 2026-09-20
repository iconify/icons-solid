import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-qx8oiyr.css';
import '../../css/d/d5z3cdcxv.css';
import '../../css/x/xpeue9oav.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z-qx8oiyr"/><path class="d5z3cdcxv"/><path class="xpeue9oav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-square-bold"} {...others} />);
}

export default Component;
