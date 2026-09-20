import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zo4iyealg.css';
import '../../css/g/gyx8j7b3u.css';
import '../../css/g/g2uo418mh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zo4iyealg"/><path class="gyx8j7b3u"/><path class="g2uo418mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:drawer-upload"} {...others} />);
}

export default Component;
