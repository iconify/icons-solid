import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrx6sqdcz.css';
import '../../css/p/pjyqshb5c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vrx6sqdcz"/><path class="pjyqshb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:map-location-star-pin"} {...others} />);
}

export default Component;
