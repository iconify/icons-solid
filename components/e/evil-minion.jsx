import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs7-nlzox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qs7-nlzox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:evil-minion"} {...others} />);
}

export default Component;
