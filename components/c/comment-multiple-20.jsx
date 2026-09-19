import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnw9k9bay.css';
import '../../css/o/onr2yub2n.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="nnw9k9bay"/><path fill="url(#SVGBf8nfckh)" class="onr2yub2n"/><defs><radialGradient id="SVGBf8nfckh" cx="0" cy="0" r="1" gradientTransform="rotate(47.452 -1.754 -.9)scale(24.8346 45.1436)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:comment-multiple-20"} {...others} />);
}

export default Component;
