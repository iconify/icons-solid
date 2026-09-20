import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7qn1eb9n.css';
import '../../css/o/ojs38lb4q.css';
import '../../css/c/caqnhmb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p7qn1eb9n"/><path class="ojs38lb4q"/><path class="caqnhmb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-music-mix-touch"} {...others} />);
}

export default Component;
