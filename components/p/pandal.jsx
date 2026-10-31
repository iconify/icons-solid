import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gdg5wjb-n.css';
import '../../css/w/wrsin2b2e.css';
import '../../css/v/vm3yhza8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gdg5wjb-n wm-shadow"/><path class="wrsin2b2e"/><path class="vm3yhza8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pandal"} {...others} />);
}

export default Component;
