import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl3uy_3rm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kl3uy_3rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:shotgrid-wordmark"} {...others} />);
}

export default Component;
