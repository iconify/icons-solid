import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy64nx-nc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sy64nx-nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:spyder-wordmark"} {...others} />);
}

export default Component;
