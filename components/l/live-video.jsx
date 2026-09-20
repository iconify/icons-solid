import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hx04rkb6q.css';
import '../../css/n/nr5aoqm0c.css';
import '../../css/i/i52vdfg8q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hx04rkb6q"/><path class="nr5aoqm0c"/><path class="i52vdfg8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:live-video"} {...others} />);
}

export default Component;
