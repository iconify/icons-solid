import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg0z4wbgl.css';
import '../../css/k/k0rw3tfwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kg0z4wbgl"/><path clip-rule="evenodd" class="k0rw3tfwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-small-bold"} {...others} />);
}

export default Component;
