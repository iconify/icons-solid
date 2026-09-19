import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbqrb3a2m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sbqrb3a2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:artixlinux-wordmark"} {...others} />);
}

export default Component;
