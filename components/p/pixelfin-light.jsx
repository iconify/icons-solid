import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqo-pac3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vqo-pac3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pixelfin-light"} {...others} />);
}

export default Component;
