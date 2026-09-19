import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffeivc3qu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ffeivc3qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:partalternationmark"} {...others} />);
}

export default Component;
