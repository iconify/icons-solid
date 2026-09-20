import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ray_qnbjg.css';
import '../../css/v/vlvdrabkl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="ray_qnbjg"/><path class="vlvdrabkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:unlink"} {...others} />);
}

export default Component;
