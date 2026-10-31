import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qjftpab-o.css';
import '../../css/n/nbzknmbro.css';
import '../../css/h/h9b8qibyt.css';
import '../../css/v/vu75pobdj.css';
import '../../css/e/e9z8z2b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qjftpab-o wm-shadow"/><path class="nbzknmbro"/><path class="h9b8qibyt"/><path class="vu75pobdj"/><path class="e9z8z2b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:presentation"} {...others} />);
}

export default Component;
