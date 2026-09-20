import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbp2-cc6v.css';
import '../../css/g/gow3njb7h.css';
import '../../css/r/re52utbdc.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zbp2-cc6v"/><path class="gow3njb7h"/><path class="re52utbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gulp"} {...others} />);
}

export default Component;
