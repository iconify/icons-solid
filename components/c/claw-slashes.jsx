import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnaxdmahf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xnaxdmahf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:claw-slashes"} {...others} />);
}

export default Component;
