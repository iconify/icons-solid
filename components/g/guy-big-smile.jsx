import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-n4jtb6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-n4jtb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:guy-big-smile"} {...others} />);
}

export default Component;
