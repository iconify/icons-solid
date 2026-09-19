import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlj_ihbrk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xlj_ihbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:guy-sad"} {...others} />);
}

export default Component;
