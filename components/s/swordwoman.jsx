import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl3p7dbdm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hl3p7dbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:swordwoman"} {...others} />);
}

export default Component;
