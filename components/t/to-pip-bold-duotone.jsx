import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdob9slbu.css';
import '../../css/v/v3h9yd14e.css';
import '../../css/h/ht8rgl0oc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdob9slbu"/><path class="v3h9yd14e"/><path class="ht8rgl0oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:to-pip-bold-duotone"} {...others} />);
}

export default Component;
