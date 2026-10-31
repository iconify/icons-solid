import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b7ob32bbz.css';
import '../../css/v/volm66jxd.css';
import '../../css/q/q92ejbb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b7ob32bbz wm-shadow"/><path class="volm66jxd"/><path class="q92ejbb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:alpana"} {...others} />);
}

export default Component;
