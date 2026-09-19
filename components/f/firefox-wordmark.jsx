import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-opoeb5s.css';
import '../../css/k/k4cnuob7n.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="m-opoeb5s"/><path class="k4cnuob7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:firefox-wordmark"} {...others} />);
}

export default Component;
