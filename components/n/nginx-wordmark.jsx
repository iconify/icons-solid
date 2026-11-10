import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3pe3fb9r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p3pe3fb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nginx-wordmark"} {...others} />);
}

export default Component;
