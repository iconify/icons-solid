import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1pbj0p4v.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x1pbj0p4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:archlinux-wordmark"} {...others} />);
}

export default Component;
