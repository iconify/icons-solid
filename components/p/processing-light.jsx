import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qypeg9b1z.css';
import '../../css/q/q9u-cabmd.css';
import '../../css/w/wpcya1b_y.css';
import '../../css/q/qhgn009xs.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="qypeg9b1z"/><path class="q9u-cabmd"/><path class="wpcya1b_y"/><path class="qhgn009xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:processing-light"} {...others} />);
}

export default Component;
