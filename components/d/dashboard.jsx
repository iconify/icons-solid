import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw2mo3r6n.css';

const viewBox = {"width":700,"height":700};
const content = `<path class="gw2mo3r6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:dashboard"} {...others} />);
}

export default Component;
