import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m2mpp3b8c.css';
import '../../css/r/rffcf0k7p.css';
import '../../css/t/tbee2l8-g.css';
import '../../css/c/ck-4ht99s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m2mpp3b8c"/><path class="rffcf0k7p wm-a"/><path class="tbee2l8-g"/><path class="ck-4ht99s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-duo"} {...others} />);
}

export default Component;
