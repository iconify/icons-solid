import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdr_rfb9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdr_rfb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:checked-shield"} {...others} />);
}

export default Component;
