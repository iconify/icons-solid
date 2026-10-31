import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/daf2jp9-x.css';
import '../../css/y/ylp_68nle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="daf2jp9-x"/><path class="ylp_68nle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:watch-duotone-round"} {...others} />);
}

export default Component;
