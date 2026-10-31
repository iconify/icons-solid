import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gvg1y4b0c.css';
import '../../css/k/khtt72elu.css';
import '../../css/t/t2x9xbbmy.css';
import '../../css/w/w34xigtyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gvg1y4b0c wm-shadow"/><path class="khtt72elu wm-shadow"/><path class="t2x9xbbmy"/><path class="w34xigtyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:music-note"} {...others} />);
}

export default Component;
