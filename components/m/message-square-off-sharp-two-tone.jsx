import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h1ghmzg2f.css';
import '../../css/h/hokgklbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="h1ghmzg2f"/><path class="hokgklbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-off-sharp-two-tone"} {...others} />);
}

export default Component;
