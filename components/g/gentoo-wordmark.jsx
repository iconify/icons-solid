import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrib8bc3g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hrib8bc3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gentoo-wordmark"} {...others} />);
}

export default Component;
