import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w4oy5wz1g.css';
import '../../css/d/dyg7-lk5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w4oy5wz1g"/><path class="dyg7-lk5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:filter-2"} {...others} />);
}

export default Component;
