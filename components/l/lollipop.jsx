import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fztg3rpub.css';
import '../../css/w/wbflqbbgm.css';
import '../../css/s/s-f6soaux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fztg3rpub"/><path class="wbflqbbgm"/><path class="s-f6soaux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lollipop"} {...others} />);
}

export default Component;
