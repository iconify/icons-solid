import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d251t1b5x.css';
import '../../css/q/q5lhk3y4v.css';
import '../../css/e/e4siog3nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d251t1b5x wm-k"/><path class="q5lhk3y4v wm-a"/><path class="e4siog3nn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cauldron"} {...others} />);
}

export default Component;
