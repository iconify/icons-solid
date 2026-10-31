import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoh4l-b-j.css';
import '../../css/e/eh_2dc82p.css';
import '../../css/r/r1nktvj7p.css';
import '../../css/s/s6xtf233y.css';
import '../../css/s/shu8t3blf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uoh4l-b-j"/><path class="eh_2dc82p"/><path class="r1nktvj7p"/><path class="s6xtf233y"/><path clip-rule="evenodd" class="shu8t3blf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:intolerant-face"} {...others} />);
}

export default Component;
