import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h32abux2b.css';
import '../../css/a/ahnzzmb0y.css';
import '../../css/n/nyiftxbxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h32abux2b"/><path class="ahnzzmb0y"/><path class="nyiftxbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:instrument-saxophone"} {...others} />);
}

export default Component;
