import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej8uesbmu.css';
import '../../css/d/dgaovib7i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ej8uesbmu"/><path class="dgaovib7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-twitch"} {...others} />);
}

export default Component;
