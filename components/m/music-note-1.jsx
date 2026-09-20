import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0sdswnkf.css';
import '../../css/e/ei9pf3_7b.css';
import '../../css/w/we2wcpp0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j0sdswnkf"/><path class="ei9pf3_7b"/><path class="we2wcpp0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:music-note-1"} {...others} />);
}

export default Component;
