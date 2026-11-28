import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3-29jb8c.css';
import '../../css/g/g25wxlbyx.css';
import '../../css/d/dvfmgjbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i3-29jb8c"/><path class="g25wxlbyx"/><path class="dvfmgjbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-through-line"} {...others} />);
}

export default Component;
