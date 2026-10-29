import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jwlnhcczc.css';
import '../../css/f/fl2yreqjg.css';
import '../../css/o/o1uw8ccbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jwlnhcczc"/><path class="fl2yreqjg"/><path class="o1uw8ccbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:text-cursor"} {...others} />);
}

export default Component;
