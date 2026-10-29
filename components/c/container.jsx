import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q_m2_qbub.css';
import '../../css/f/fzf0h0g8v.css';
import '../../css/z/zvjpqvbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q_m2_qbub"/><path class="fzf0h0g8v"/><path class="zvjpqvbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:container"} {...others} />);
}

export default Component;
