import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwlye49zs.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="jwlye49zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:linkedin-in"} {...others} />);
}

export default Component;
