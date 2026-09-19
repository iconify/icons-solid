import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc9bt0gfe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pc9bt0gfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nuget-wordmark"} {...others} />);
}

export default Component;
