import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z72g4ybii.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="z72g4ybii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:arrow-up-left"} {...others} />);
}

export default Component;
