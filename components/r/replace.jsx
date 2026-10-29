import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yt8-h8bsb.css';
import '../../css/c/cjj81ggta.css';
import '../../css/f/fl9qasb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yt8-h8bsb"/><path class="cjj81ggta wm-a"/><path class="fl9qasb6v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:replace"} {...others} />);
}

export default Component;
