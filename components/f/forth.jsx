import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7apoginp.css';
import '../../css/w/wwaqembnl.css';
import '../../css/r/ryh-cf8_k.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="w7apoginp"/><path class="wwaqembnl"/><path class="ryh-cf8_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:forth"} {...others} />);
}

export default Component;
