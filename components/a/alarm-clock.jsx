import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va-qs_okh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="va-qs_okh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:alarm-clock"} {...others} />);
}

export default Component;
