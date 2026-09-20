import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cshvsweet.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mfug5ibpq.css';
import '../../css/c/c66ezsb2m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cshvsweet"/><g class="ij2x_72vy"><path class="mfug5ibpq"/><path class="c66ezsb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:code-editor"} {...others} />);
}

export default Component;
