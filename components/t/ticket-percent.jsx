import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/awo16gfmb.css';
import '../../css/i/ib9nf2tbe.css';
import '../../css/g/gvqb6nmyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="awo16gfmb"/><path class="ib9nf2tbe"/><path class="gvqb6nmyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ticket-percent"} {...others} />);
}

export default Component;
