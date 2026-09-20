import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h4-i6mr6q.css';
import '../../css/w/wcsmwccul.css';
import '../../css/h/hz1ydac1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h4-i6mr6q"/><path class="wcsmwccul"/><path class="hz1ydac1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:trophy"} {...others} />);
}

export default Component;
