import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au6hhft4u.css';
import '../../css/g/gomb-26qh.css';
import '../../css/b/bf3uyq84n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="au6hhft4u wm-k"/><path class="gomb-26qh wm-shine"/><path class="bf3uyq84n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:id-card"} {...others} />);
}

export default Component;
