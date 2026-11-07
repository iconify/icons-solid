import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7lymocvt.css';
import '../../css/g/gx3w35u0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q7lymocvt"/><path class="gx3w35u0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-bold"} {...others} />);
}

export default Component;
