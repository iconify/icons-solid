import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_wi9y41m.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="p_wi9y41m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:austral-sign"} {...others} />);
}

export default Component;
