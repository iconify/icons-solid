import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1qrfw5vg.css';
import '../../css/e/ewwzgm-tj.css';
import '../../css/c/c9rki1f6f.css';
import '../../css/y/yg82avbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k1qrfw5vg"/><path class="ewwzgm-tj"/><path class="c9rki1f6f"/><path class="yg82avbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:media-protection-shield-1"} {...others} />);
}

export default Component;
