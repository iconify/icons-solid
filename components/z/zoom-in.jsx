import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7o6sobbm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h7o6sobbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:zoom-in"} {...others} />);
}

export default Component;
