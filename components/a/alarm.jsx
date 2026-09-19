import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihf3etbjh.css';
import '../../css/p/ph2qz-bis.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ihf3etbjh"/><path class="ph2qz-bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:alarm"} {...others} />);
}

export default Component;
