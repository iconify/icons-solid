import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0-mqwb2a.css';
import '../../css/d/dih0g1b-s.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s0-mqwb2a"/><path clip-rule="evenodd" class="dih0g1b-s"/><path class="c3lyyzb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-clock-bold"} {...others} />);
}

export default Component;
