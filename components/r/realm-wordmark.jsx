import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7hkk8ylo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s7hkk8ylo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:realm-wordmark"} {...others} />);
}

export default Component;
