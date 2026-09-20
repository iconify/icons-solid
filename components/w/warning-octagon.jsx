import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp5vo7b9z.css';
import '../../css/j/j-j2v3y_c.css';
import '../../css/h/h3wr_jb8n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cp5vo7b9z"/><path class="j-j2v3y_c"/><path class="h3wr_jb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:warning-octagon"} {...others} />);
}

export default Component;
