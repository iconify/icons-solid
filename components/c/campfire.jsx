import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sh_npobmv.css';
import '../../css/m/mrih6q1fr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sh_npobmv"/><path class="mrih6q1fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:campfire"} {...others} />);
}

export default Component;
