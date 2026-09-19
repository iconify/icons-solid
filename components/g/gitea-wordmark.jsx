import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz-b3xwif.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dz-b3xwif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gitea-wordmark"} {...others} />);
}

export default Component;
