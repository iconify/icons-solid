import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pi-hm4qac.css';
import '../../css/d/d1yjqobcl.css';
import '../../css/e/erhzy_boy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="pi-hm4qac"/><path class="d1yjqobcl"/><path class="erhzy_boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-pin-3"} {...others} />);
}

export default Component;
